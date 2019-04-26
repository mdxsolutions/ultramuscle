export interface Recipe {
    recipeId: number;
    nutritionId: number;
    name: string;
    description?: string;
    ingredients: [string];
    tips?: string[];
    author?: any;
    steps?: any;
    images?: any;
}