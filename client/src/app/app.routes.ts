import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ListsComponent } from './components/lists/lists.component';
import { MemberDetailComponent } from './components/members/member-detail/member-detail.component';
import { MemberListComponent } from './components/members/member-list/member-list.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "",
    runGuardsAndResolvers:'always',
    canActivate: [authGuard],
    children: [
      {path: "members", component: MemberListComponent,canActivate:[authGuard]},
      {path: "members/:id", component: MemberDetailComponent},
      {path: "lists", component: ListsComponent},
      {path: "messages", component: MessagesComponent},
    ]
  },
  {path: "**", component: HomeComponent, pathMatch: "full"},
];
