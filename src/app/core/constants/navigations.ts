import { InjectionToken } from '@angular/core';

export interface SidebarItem {
  id: string;
  url?: string;
  icon?: string;
  title: string;
  sub_title: string;
  children?: SidebarItem[];
  disabled?: boolean;
  mobile_bar?: boolean;
  role?: {
    only?: Array<string>;
    except?: Array<string>;
  };
}

export const APPLICATION_SIDEBAR = new InjectionToken<SidebarItem[]>('ApplicationNav');

export const NAVIGATIONS: SidebarItem[] = [
  {
    id: 'menu1:lv1',
    title: 'Quản lý dự án',
    sub_title: 'dự án',
    icon: 'block',
    url: '/projects',
    mobile_bar: true,
    role: {
      only: ['constructor']
    }
  },
  {
    id: 'menu1:lv1',
    title: 'Quản lý vật tư',
    sub_title: 'vật tư',
    icon: 'funnel-plot',
    url: '/material',
    mobile_bar: true,
    role: {
      only: ['supplier']
    }
  },
  {
    id: 'menu2:lv1',
    title: 'Quản lý đơn hàng',
    sub_title: 'đơn hàng',
    icon: 'shopping',
    url: '/order',
    mobile_bar: true,
    role: {
      only: ['constructor', 'supplier']
    }
  },
  {
    id: 'menu3:lv1',
    title: 'Quản lý hợp đồng',
    sub_title: 'hợp đòng',
    icon: 'audit',
    url: '/contract',
    mobile_bar: true,
    role: {
      only: ['constructor', 'supplier']
    }
  },
  {
    id: 'menu1:lv1',
    title: 'Tìm kiếm nhà cung cấp',
    sub_title: 'tìm kiếm',
    icon: 'search',
    url: '/search-suppliers',
    mobile_bar: true,
    role: {
      only: ['constructor']
    }
  },
  {
    id: 'menu1:lv1',
    title: 'Tìm kiếm dự án',
    sub_title: 'tìm kiếm',
    icon: 'search',
    url: '/search-project',
    mobile_bar: true,
    role: {
      only: ['supplier']
    }
  },
  {
    id: 'menu4:lv1',
    title: 'Thống kê',
    sub_title: 'thống kê',
    icon: 'pie-chart',
    url: '/statistics',
    mobile_bar: false,
    role: {
      only: ['constructor', 'supplier']
    }
  },
  {
    id: 'menu6:lv1',
    title: 'Nhà thầu',
    sub_title: 'nhà thầu',
    icon: 'medicine-box',
    url: '/contractors',
    mobile_bar: true,
    role: {
      only: ['admin']
    }
  },
  {
    id: 'menu5:lv1',
    title: 'Nhà cung cấp',
    sub_title: 'nhà cung cấp',
    icon: 'idcard',
    url: '/suppliers',
    mobile_bar: true,
    role: {
      only: ['admin']
    }
  },
  {
    id: 'menu5:lv1',
    title: 'Quản lý phân quyền',
    sub_title: 'phân quyền',
    icon: 'key',
    url: '/permission',
    mobile_bar: true,
    role: {
      only: ['admin']
    }
  },
  {
    id: 'menu5:lv1',
    title: 'Quản lý người dùng',
    sub_title: 'người dùng',
    icon: 'team',
    url: '/user',
    mobile_bar: true,
    role: {
      only: ['admin']
    }
  }
];

export const NAVIGATIONS_BOTTOM: SidebarItem[] = [
  {
    id: 'menu1:lv1',
    title: 'Phản hồi, góp ý',
    sub_title: 'phản hồi, góp ý',
    icon: 'comment',
    url: '/feedback',
    role: {
      only: ['USER']
    }
  },
  {
    id: 'menu2:lv1',
    title: 'Hướng dẫn sử dụng',
    sub_title: 'hướng dẫn sử dụng',
    icon: 'bulb',
    url: '/guide',
    role: {
      only: ['USER']
    }
  },
  {
    id: 'menu3:lv1',
    title: 'Cài đặt',
    sub_title: 'cài đặt',
    icon: 'setting',
    url: '/settings',
    role: {
      only: ['USER']
    }
  }
];
