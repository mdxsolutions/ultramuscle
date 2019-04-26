import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

// Modules
import { HttpClientModule } from '@angular/common/http';

// Components
import {
	HeaderComponent,
	TitleComponent,
	WeeklyCardComponent,
	ToolCardComponent,
	WorkoutCardComponent
} from './index.component'

import { CategoryCardComponent } from './category-card/category-card';
import { WorkoutHeaderComponent } from './workout-header/workout-header';
import { BlogCardComponent } from './blog-card/blog-card';
import { PostCardComponent } from './post-card/post-card';
import { NutritionCardComponent } from './nutrition-card/nutrition-card';
import { RecipeCardComponent } from './recipe-card/recipe-card';

@NgModule({
	declarations: [
		HeaderComponent,
		TitleComponent,
    WeeklyCardComponent,
		ToolCardComponent,
    CategoryCardComponent,
    WorkoutHeaderComponent,
    BlogCardComponent,
    PostCardComponent,
    NutritionCardComponent,
    RecipeCardComponent,
		WorkoutCardComponent,
	],
	imports: [
		IonicModule,
		HttpClientModule
	],
	exports: [
		HeaderComponent,
		TitleComponent,
    WeeklyCardComponent,
		ToolCardComponent,
    CategoryCardComponent,
    WorkoutHeaderComponent,
    BlogCardComponent,
    PostCardComponent,
    NutritionCardComponent,
    RecipeCardComponent,
    WorkoutCardComponent,
	]
})
export class ComponentsModule {}
