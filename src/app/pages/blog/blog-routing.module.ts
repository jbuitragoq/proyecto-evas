import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogComponent } from "./blog.component";
import { DetailComponent } from "./detail/detail.component";

const routes: Routes = [
    { path: '', component: BlogComponent },
    { path: 'detail/:{id}', component: DetailComponent }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }
