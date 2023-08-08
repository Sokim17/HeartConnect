import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users/users.component";

export const Router = [
    {
      path: "",
      component: HomeComponent
    },
    {
      path: "users",
      component: UsersComponent
    },
    {
      path: "users/:id",
      component: UserComponent
    },
    {
      path: "**",
      component: ErrorPageComponent
    }
  ]