import { HfInference } from "@huggingface/inference";
import { useState, useEffect, useRef } from "react";
import Markdown from "react-markdown";

interface Props {
  list: string[];
}

const GET_RECIPE_API_KEY = import.meta.env.VITE_GET_RECIPE_HG_API_KEY;

const context = `you are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients.  you don't need to use every ingredient they mention in your recipe. the recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. format your response in markdown to make it easier to render to a web page.`;
const inference = new HfInference(GET_RECIPE_API_KEY);

export const getRecipiFromHFMistral = async (list: string[]) => {
  let items: string = list.join(", ");

  try {
    const response = await inference.chatCompletion({
      model: "mistralai/Mistral-7B-Instruct-v0.3",
      messages: [
        { role: "system", content: context },
        {
          role: "user",
          content: `I have ${items}. Please give me a recipe you'd recommend i Make`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.log(err);
    return "null response cuase Error occurred visit console for further review";
  }
};

const ClaudeOutput = ({ list }: Props) => {
  const getRecipeDiv = useRef<HTMLDivElement>(null);
  const [recipeMarkdown, setRecipeMarkdown] = useState<string | undefined>(
    "Loading..."
  );
  useEffect(() => {
    const fetchRecipe = async () => {
      const recipe: string | undefined = await getRecipiFromHFMistral(list);
      setRecipeMarkdown(recipe);
    };

    fetchRecipe();
  }, [list]);

  useEffect(() => {
    if (recipeMarkdown !== "Loading..." && getRecipeDiv.current !== null) {
      getRecipeDiv.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipeMarkdown]);

  return (
    <div ref={getRecipeDiv}>
      {" "}
      <Markdown className="claude-output">{recipeMarkdown}</Markdown>
    </div>
  );
};

export default ClaudeOutput;
