import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('@modules/todo/todo.module').then(m => m.TodoModule),
    data: { title: 'Todo' }
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule),
    data: { title: 'Trang chủ' }
  },
  {
    path: 'projects',
    canActivate: [AuthGuard],
    loadChildren: () => import('@modules/project/project.module').then(m => m.ProjectModule),
    data: { title: 'Dự án' }
  },
  {
    path: 'order',
    canActivate: [AuthGuard],
    loadChildren: () => import('@modules/order/order.module').then(m => m.OrderModule),
    data: { title: 'Đơn hàng' }
  },
  {
    path: 'contract',
    canActivate: [AuthGuard],
    loadChildren: () => import('@modules/contract/contract.module').then(m => m.ContractModule),
    data: { title: 'Hợp đồng' }
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    loadChildren: () => import('@modules/login/login.module').then(m => m.LoginModule),
    data: { title: 'Đăng nhập' }
  },
  {
    path: 'register',
    canActivate: [LoginGuard],
    loadChildren: () => import('@modules/register/register.module').then(m => m.RegisterModule),
    data: { title: 'Đăng ký' }
  },
  {
    path: 'forgot-password',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('@modules/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
    data: { title: 'Lấy lại mật khẩu' }
  },
  {
    path: 'reset-password',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('@modules/reset-password/reset-password.module').then(m => m.ResetPasswordModule),
    data: { title: 'Đặt lại mật khẩu' }
  },
  {
    path: 'choose-role',
    canActivate: [GuestGuard],
    loadChildren: () =>
      import('@modules/choose-role/choose-role.module').then(m => m.ChooseRoleModule),
    data: { title: 'Đăng ký quyền sử dụng' }
  },
  {
    path: '',
    loadChildren: () =>
      import('@modules/landing-page/landing-page.module').then(m => m.LandingPageModule),
    data: { title: 'Landing Page' }
  },
  {
    path: 'contractors',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@modules/contractors/contractors.module').then(m => m.ContractorsModule),
    data: { title: 'Nhà thầu' }
  },
  {
    path: 'suppliers',
    canActivate: [AuthGuard],
    loadChildren: () => import('@modules/supplier/supplier.module').then(m => m.SupplierModule),
    data: { title: 'Nhà cung cấp' }
  },
  {
    path: 'material',
    canActivate: [AuthGuard],
    loadChildren: () => import('@modules/material/material.module').then(m => m.MaterialModule),
    data: { title: 'Quản lý vật tư' }
  },
  {
    path: 'search-suppliers',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@modules/search-suppliers/search-suppliers.module').then(
        m => m.SearchSuppliersModule
      ),
    data: { title: 'Tìm kiếm nhà cung cấp' }
  },
  {
    path: 'search-project',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@modules/search-project/search-project.module').then(m => m.SearchProjectModule),
    data: { title: 'Tìm kiếm dự án' }
  },
  {
    path: 'permission',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@modules/permission/permission.module').then(m => m.PermissionModule),
    data: { title: 'Quản lý quyền người dùng' }
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    loadChildren: () => import('@modules/user/user.module').then(m => m.UserModule),
    data: { title: 'Quản lý người dùng' }
  },
  {
    path: 'statistics',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@modules/statistics/statistics.module').then(m => m.StatisticsModule),
    data: { title: 'Thống kê' }
  },
  {
    path: 'me',
    canActivate: [AuthGuard],
    loadChildren: () => import('@modules/profile/profile.module').then(m => m.ProfileModule),
    data: { title: 'Thông tin tài khoản' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
