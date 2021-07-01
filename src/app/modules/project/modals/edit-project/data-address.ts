interface IProvince {
  [key: string]: {
    name: string;
    slug: string;
    type: string;
    name_with_type: string;
    code: string;
    children: {
      [key: string]: {
        name: string;
        slug: string;
        type: string;
        name_with_type: string;
        path: string;
        path_with_type: string;
        parent_code: string;
        code: string;
        children: {
          [key: string]: {
            name: string;
            slug: string;
            type: string;
            name_with_type: string;
            path: string;
            path_with_type: string;
            parent_code: string;
            code: string;
          };
        };
      };
    };
  };
}

export let dataAddress: IProvince = {
  '75': {
    name: 'Đồng Nai',
    slug: 'dong-nai',
    type: 'tinh',
    name_with_type: 'Tỉnh Đồng Nai',
    code: '75',
    children: {
      '731': {
        name: 'Biên Hòa',
        type: 'thanh-pho',
        slug: 'bien-hoa',
        name_with_type: 'Thành phố Biên Hòa',
        path: 'Biên Hòa, Đồng Nai',
        path_with_type: 'Thành phố Biên Hòa, Tỉnh Đồng Nai',
        code: '731',
        parent_code: '75',
        children: {
          '25993': {
            name: 'Trảng Dài',
            type: 'phuong',
            slug: 'trang-dai',
            name_with_type: 'Phường Trảng Dài',
            path: 'Trảng Dài, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Trảng Dài, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '25993',
            parent_code: '731'
          },
          '25996': {
            name: 'Tân Phong',
            type: 'phuong',
            slug: 'tan-phong',
            name_with_type: 'Phường Tân Phong',
            path: 'Tân Phong, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Tân Phong, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '25996',
            parent_code: '731'
          },
          '25999': {
            name: 'Tân Biên',
            type: 'phuong',
            slug: 'tan-bien',
            name_with_type: 'Phường Tân Biên',
            path: 'Tân Biên, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Tân Biên, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '25999',
            parent_code: '731'
          },
          '26002': {
            name: 'Hố Nai',
            type: 'phuong',
            slug: 'ho-nai',
            name_with_type: 'Phường Hố Nai',
            path: 'Hố Nai, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Hố Nai, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26002',
            parent_code: '731'
          },
          '26005': {
            name: 'Tân Hòa',
            type: 'phuong',
            slug: 'tan-hoa',
            name_with_type: 'Phường Tân Hòa',
            path: 'Tân Hòa, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Tân Hòa, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26005',
            parent_code: '731'
          },
          '26008': {
            name: 'Tân Hiệp',
            type: 'phuong',
            slug: 'tan-hiep',
            name_with_type: 'Phường Tân Hiệp',
            path: 'Tân Hiệp, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Tân Hiệp, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26008',
            parent_code: '731'
          },
          '26011': {
            name: 'Bửu Long',
            type: 'phuong',
            slug: 'buu-long',
            name_with_type: 'Phường Bửu Long',
            path: 'Bửu Long, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Bửu Long, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26011',
            parent_code: '731'
          },
          '26014': {
            name: 'Tân Tiến',
            type: 'phuong',
            slug: 'tan-tien',
            name_with_type: 'Phường Tân Tiến',
            path: 'Tân Tiến, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26014',
            parent_code: '731'
          },
          '26017': {
            name: 'Tam Hiệp',
            type: 'phuong',
            slug: 'tam-hiep',
            name_with_type: 'Phường Tam Hiệp',
            path: 'Tam Hiệp, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Tam Hiệp, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26017',
            parent_code: '731'
          },
          '26020': {
            name: 'Long Bình',
            type: 'phuong',
            slug: 'long-binh',
            name_with_type: 'Phường Long Bình',
            path: 'Long Bình, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Long Bình, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26020',
            parent_code: '731'
          },
          '26023': {
            name: 'Quang Vinh',
            type: 'phuong',
            slug: 'quang-vinh',
            name_with_type: 'Phường Quang Vinh',
            path: 'Quang Vinh, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Quang Vinh, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26023',
            parent_code: '731'
          },
          '26026': {
            name: 'Tân Mai',
            type: 'phuong',
            slug: 'tan-mai',
            name_with_type: 'Phường Tân Mai',
            path: 'Tân Mai, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Tân Mai, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26026',
            parent_code: '731'
          },
          '26029': {
            name: 'Thống Nhất',
            type: 'phuong',
            slug: 'thong-nhat',
            name_with_type: 'Phường Thống Nhất',
            path: 'Thống Nhất, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Thống Nhất, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26029',
            parent_code: '731'
          },
          '26032': {
            name: 'Trung Dũng',
            type: 'phuong',
            slug: 'trung-dung',
            name_with_type: 'Phường Trung Dũng',
            path: 'Trung Dũng, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Trung Dũng, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26032',
            parent_code: '731'
          },
          '26035': {
            name: 'Tam Hòa',
            type: 'phuong',
            slug: 'tam-hoa',
            name_with_type: 'Phường Tam Hòa',
            path: 'Tam Hòa, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Tam Hòa, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26035',
            parent_code: '731'
          },
          '26038': {
            name: 'Hòa Bình',
            type: 'phuong',
            slug: 'hoa-binh',
            name_with_type: 'Phường Hòa Bình',
            path: 'Hòa Bình, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Hòa Bình, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26038',
            parent_code: '731'
          },
          '26041': {
            name: 'Quyết Thắng',
            type: 'phuong',
            slug: 'quyet-thang',
            name_with_type: 'Phường Quyết Thắng',
            path: 'Quyết Thắng, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Quyết Thắng, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26041',
            parent_code: '731'
          },
          '26044': {
            name: 'Thanh Bình',
            type: 'phuong',
            slug: 'thanh-binh',
            name_with_type: 'Phường Thanh Bình',
            path: 'Thanh Bình, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Thanh Bình, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26044',
            parent_code: '731'
          },
          '26047': {
            name: 'Bình Đa',
            type: 'phuong',
            slug: 'binh-da',
            name_with_type: 'Phường Bình Đa',
            path: 'Bình Đa, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Bình Đa, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26047',
            parent_code: '731'
          },
          '26050': {
            name: 'An Bình',
            type: 'phuong',
            slug: 'an-binh',
            name_with_type: 'Phường An Bình',
            path: 'An Bình, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường An Bình, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26050',
            parent_code: '731'
          },
          '26053': {
            name: 'Bửu Hòa',
            type: 'phuong',
            slug: 'buu-hoa',
            name_with_type: 'Phường Bửu Hòa',
            path: 'Bửu Hòa, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Bửu Hòa, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26053',
            parent_code: '731'
          },
          '26056': {
            name: 'Long Bình Tân',
            type: 'phuong',
            slug: 'long-binh-tan',
            name_with_type: 'Phường Long Bình Tân',
            path: 'Long Bình Tân, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Long Bình Tân, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26056',
            parent_code: '731'
          },
          '26059': {
            name: 'Tân Vạn',
            type: 'phuong',
            slug: 'tan-van',
            name_with_type: 'Phường Tân Vạn',
            path: 'Tân Vạn, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Tân Vạn, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26059',
            parent_code: '731'
          },
          '26062': {
            name: 'Tân Hạnh',
            type: 'phuong',
            slug: 'tan-hanh',
            name_with_type: 'Phường Tân Hạnh',
            path: 'Tân Hạnh, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Tân Hạnh, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26062',
            parent_code: '731'
          },
          '26065': {
            name: 'Hiệp Hòa',
            type: 'phuong',
            slug: 'hiep-hoa',
            name_with_type: 'Phường Hiệp Hòa',
            path: 'Hiệp Hòa, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Hiệp Hòa, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26065',
            parent_code: '731'
          },
          '26068': {
            name: 'Hóa An',
            type: 'phuong',
            slug: 'hoa-an',
            name_with_type: 'Phường Hóa An',
            path: 'Hóa An, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Hóa An, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26068',
            parent_code: '731'
          },
          '26371': {
            name: 'An Hòa',
            type: 'phuong',
            slug: 'an-hoa',
            name_with_type: 'Phường An Hòa',
            path: 'An Hòa, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường An Hòa, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26371',
            parent_code: '731'
          },
          '26374': {
            name: 'Tam Phước',
            type: 'phuong',
            slug: 'tam-phuoc',
            name_with_type: 'Phường Tam Phước',
            path: 'Tam Phước, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Tam Phước, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26374',
            parent_code: '731'
          },
          '26377': {
            name: 'Phước Tân',
            type: 'phuong',
            slug: 'phuoc-tan',
            name_with_type: 'Phường Phước Tân',
            path: 'Phước Tân, Biên Hòa, Đồng Nai',
            path_with_type: 'Phường Phước Tân, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26377',
            parent_code: '731'
          },
          '26380': {
            name: 'Long Hưng',
            type: 'xa',
            slug: 'long-hung',
            name_with_type: 'Xã Long Hưng',
            path: 'Long Hưng, Biên Hòa, Đồng Nai',
            path_with_type: 'Xã Long Hưng, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            code: '26380',
            parent_code: '731'
          }
        }
      },
      '732': {
        name: 'Long Khánh',
        type: 'thanh-pho',
        slug: 'long-khanh',
        name_with_type: 'Thành phố Long Khánh',
        path: 'Long Khánh, Đồng Nai',
        path_with_type: 'Thành phố Long Khánh, Tỉnh Đồng Nai',
        code: '732',
        parent_code: '75',
        children: {
          '26071': {
            name: 'Xuân Trung',
            type: 'phuong',
            slug: 'xuan-trung',
            name_with_type: 'Phường Xuân Trung',
            path: 'Xuân Trung, Long Khánh, Đồng Nai',
            path_with_type: 'Phường Xuân Trung, Thành phố Long Khánh, Tỉnh Đồng Nai',
            code: '26071',
            parent_code: '732'
          },
          '26074': {
            name: 'Xuân Thanh',
            type: 'phuong',
            slug: 'xuan-thanh',
            name_with_type: 'Phường Xuân Thanh',
            path: 'Xuân Thanh, Long Khánh, Đồng Nai',
            path_with_type: 'Phường Xuân Thanh, Thành phố Long Khánh, Tỉnh Đồng Nai',
            code: '26074',
            parent_code: '732'
          },
          '26077': {
            name: 'Xuân Bình',
            type: 'phuong',
            slug: 'xuan-binh',
            name_with_type: 'Phường Xuân Bình',
            path: 'Xuân Bình, Long Khánh, Đồng Nai',
            path_with_type: 'Phường Xuân Bình, Thành phố Long Khánh, Tỉnh Đồng Nai',
            code: '26077',
            parent_code: '732'
          },
          '26080': {
            name: 'Xuân An',
            type: 'phuong',
            slug: 'xuan-an',
            name_with_type: 'Phường Xuân An',
            path: 'Xuân An, Long Khánh, Đồng Nai',
            path_with_type: 'Phường Xuân An, Thành phố Long Khánh, Tỉnh Đồng Nai',
            code: '26080',
            parent_code: '732'
          },
          '26083': {
            name: 'Xuân Hoà',
            type: 'phuong',
            slug: 'xuan-hoa',
            name_with_type: 'Phường Xuân Hoà',
            path: 'Xuân Hoà, Long Khánh, Đồng Nai',
            path_with_type: 'Phường Xuân Hoà, Thành phố Long Khánh, Tỉnh Đồng Nai',
            code: '26083',
            parent_code: '732'
          },
          '26086': {
            name: 'Phú Bình',
            type: 'phuong',
            slug: 'phu-binh',
            name_with_type: 'Phường Phú Bình',
            path: 'Phú Bình, Long Khánh, Đồng Nai',
            path_with_type: 'Phường Phú Bình, Thành phố Long Khánh, Tỉnh Đồng Nai',
            code: '26086',
            parent_code: '732'
          },
          '26089': {
            name: 'Bình Lộc',
            type: 'xa',
            slug: 'binh-loc',
            name_with_type: 'Xã Bình Lộc',
            path: 'Bình Lộc, Long Khánh, Đồng Nai',
            path_with_type: 'Xã Bình Lộc, Thành phố Long Khánh, Tỉnh Đồng Nai',
            code: '26089',
            parent_code: '732'
          },
          '26092': {
            name: 'Bảo Quang',
            type: 'xa',
            slug: 'bao-quang',
            name_with_type: 'Xã Bảo Quang',
            path: 'Bảo Quang, Long Khánh, Đồng Nai',
            path_with_type: 'Xã Bảo Quang, Thành phố Long Khánh, Tỉnh Đồng Nai',
            code: '26092',
            parent_code: '732'
          },
          '26095': {
            name: 'Suối Tre',
            type: 'phuong',
            slug: 'suoi-tre',
            name_with_type: 'Phường Suối Tre',
            path: 'Suối Tre, Long Khánh, Đồng Nai',
            path_with_type: 'Phường Suối Tre, Thành phố Long Khánh, Tỉnh Đồng Nai',
            code: '26095',
            parent_code: '732'
          },
          '26098': {
            name: 'Bảo Vinh',
            type: 'phuong',
            slug: 'bao-vinh',
            name_with_type: 'Phường Bảo Vinh',
            path: 'Bảo Vinh, Long Khánh, Đồng Nai',
            path_with_type: 'Phường Bảo Vinh, Thành phố Long Khánh, Tỉnh Đồng Nai',
            code: '26098',
            parent_code: '732'
          },
          '26101': {
            name: 'Xuân Lập',
            type: 'phuong',
            slug: 'xuan-lap',
            name_with_type: 'Phường Xuân Lập',
            path: 'Xuân Lập, Long Khánh, Đồng Nai',
            path_with_type: 'Phường Xuân Lập, Thành phố Long Khánh, Tỉnh Đồng Nai',
            code: '26101',
            parent_code: '732'
          },
          '26104': {
            name: 'Bàu Sen',
            type: 'phuong',
            slug: 'bau-sen',
            name_with_type: 'Phường Bàu Sen',
            path: 'Bàu Sen, Long Khánh, Đồng Nai',
            path_with_type: 'Phường Bàu Sen, Thành phố Long Khánh, Tỉnh Đồng Nai',
            code: '26104',
            parent_code: '732'
          },
          '26107': {
            name: 'Bàu Trâm',
            type: 'xa',
            slug: 'bau-tram',
            name_with_type: 'Xã Bàu Trâm',
            path: 'Bàu Trâm, Long Khánh, Đồng Nai',
            path_with_type: 'Xã Bàu Trâm, Thành phố Long Khánh, Tỉnh Đồng Nai',
            code: '26107',
            parent_code: '732'
          },
          '26110': {
            name: 'Xuân Tân',
            type: 'phuong',
            slug: 'xuan-tan',
            name_with_type: 'Phường Xuân Tân',
            path: 'Xuân Tân, Long Khánh, Đồng Nai',
            path_with_type: 'Phường Xuân Tân, Thành phố Long Khánh, Tỉnh Đồng Nai',
            code: '26110',
            parent_code: '732'
          },
          '26113': {
            name: 'Hàng Gòn',
            type: 'xa',
            slug: 'hang-gon',
            name_with_type: 'Xã Hàng Gòn',
            path: 'Hàng Gòn, Long Khánh, Đồng Nai',
            path_with_type: 'Xã Hàng Gòn, Thành phố Long Khánh, Tỉnh Đồng Nai',
            code: '26113',
            parent_code: '732'
          }
        }
      },
      '734': {
        name: 'Tân Phú',
        type: 'huyen',
        slug: 'tan-phu',
        name_with_type: 'Huyện Tân Phú',
        path: 'Tân Phú, Đồng Nai',
        path_with_type: 'Huyện Tân Phú, Tỉnh Đồng Nai',
        code: '734',
        parent_code: '75',
        children: {
          '26116': {
            name: 'Tân Phú',
            type: 'thi-tran',
            slug: 'tan-phu',
            name_with_type: 'Thị trấn Tân Phú',
            path: 'Tân Phú, Tân Phú, Đồng Nai',
            path_with_type: 'Thị trấn Tân Phú, Huyện Tân Phú, Tỉnh Đồng Nai',
            code: '26116',
            parent_code: '734'
          },
          '26119': {
            name: 'Dak Lua',
            type: 'xa',
            slug: 'dak-lua',
            name_with_type: 'Xã Dak Lua',
            path: 'Dak Lua, Tân Phú, Đồng Nai',
            path_with_type: 'Xã Dak Lua, Huyện Tân Phú, Tỉnh Đồng Nai',
            code: '26119',
            parent_code: '734'
          },
          '26122': {
            name: 'Nam Cát Tiên',
            type: 'xa',
            slug: 'nam-cat-tien',
            name_with_type: 'Xã Nam Cát Tiên',
            path: 'Nam Cát Tiên, Tân Phú, Đồng Nai',
            path_with_type: 'Xã Nam Cát Tiên, Huyện Tân Phú, Tỉnh Đồng Nai',
            code: '26122',
            parent_code: '734'
          },
          '26125': {
            name: 'Phú An',
            type: 'xa',
            slug: 'phu-an',
            name_with_type: 'Xã Phú An',
            path: 'Phú An, Tân Phú, Đồng Nai',
            path_with_type: 'Xã Phú An, Huyện Tân Phú, Tỉnh Đồng Nai',
            code: '26125',
            parent_code: '734'
          },
          '26128': {
            name: 'Núi Tượng',
            type: 'xa',
            slug: 'nui-tuong',
            name_with_type: 'Xã Núi Tượng',
            path: 'Núi Tượng, Tân Phú, Đồng Nai',
            path_with_type: 'Xã Núi Tượng, Huyện Tân Phú, Tỉnh Đồng Nai',
            code: '26128',
            parent_code: '734'
          },
          '26131': {
            name: 'Tà Lài',
            type: 'xa',
            slug: 'ta-lai',
            name_with_type: 'Xã Tà Lài',
            path: 'Tà Lài, Tân Phú, Đồng Nai',
            path_with_type: 'Xã Tà Lài, Huyện Tân Phú, Tỉnh Đồng Nai',
            code: '26131',
            parent_code: '734'
          },
          '26134': {
            name: 'Phú Lập',
            type: 'xa',
            slug: 'phu-lap',
            name_with_type: 'Xã Phú Lập',
            path: 'Phú Lập, Tân Phú, Đồng Nai',
            path_with_type: 'Xã Phú Lập, Huyện Tân Phú, Tỉnh Đồng Nai',
            code: '26134',
            parent_code: '734'
          },
          '26137': {
            name: 'Phú Sơn',
            type: 'xa',
            slug: 'phu-son',
            name_with_type: 'Xã Phú Sơn',
            path: 'Phú Sơn, Tân Phú, Đồng Nai',
            path_with_type: 'Xã Phú Sơn, Huyện Tân Phú, Tỉnh Đồng Nai',
            code: '26137',
            parent_code: '734'
          },
          '26140': {
            name: 'Phú Thịnh',
            type: 'xa',
            slug: 'phu-thinh',
            name_with_type: 'Xã Phú Thịnh',
            path: 'Phú Thịnh, Tân Phú, Đồng Nai',
            path_with_type: 'Xã Phú Thịnh, Huyện Tân Phú, Tỉnh Đồng Nai',
            code: '26140',
            parent_code: '734'
          },
          '26143': {
            name: 'Thanh Sơn',
            type: 'xa',
            slug: 'thanh-son',
            name_with_type: 'Xã Thanh Sơn',
            path: 'Thanh Sơn, Tân Phú, Đồng Nai',
            path_with_type: 'Xã Thanh Sơn, Huyện Tân Phú, Tỉnh Đồng Nai',
            code: '26143',
            parent_code: '734'
          },
          '26146': {
            name: 'Phú Trung',
            type: 'xa',
            slug: 'phu-trung',
            name_with_type: 'Xã Phú Trung',
            path: 'Phú Trung, Tân Phú, Đồng Nai',
            path_with_type: 'Xã Phú Trung, Huyện Tân Phú, Tỉnh Đồng Nai',
            code: '26146',
            parent_code: '734'
          },
          '26149': {
            name: 'Phú Xuân',
            type: 'xa',
            slug: 'phu-xuan',
            name_with_type: 'Xã Phú Xuân',
            path: 'Phú Xuân, Tân Phú, Đồng Nai',
            path_with_type: 'Xã Phú Xuân, Huyện Tân Phú, Tỉnh Đồng Nai',
            code: '26149',
            parent_code: '734'
          },
          '26152': {
            name: 'Phú Lộc',
            type: 'xa',
            slug: 'phu-loc',
            name_with_type: 'Xã Phú Lộc',
            path: 'Phú Lộc, Tân Phú, Đồng Nai',
            path_with_type: 'Xã Phú Lộc, Huyện Tân Phú, Tỉnh Đồng Nai',
            code: '26152',
            parent_code: '734'
          },
          '26155': {
            name: 'Phú Lâm',
            type: 'xa',
            slug: 'phu-lam',
            name_with_type: 'Xã Phú Lâm',
            path: 'Phú Lâm, Tân Phú, Đồng Nai',
            path_with_type: 'Xã Phú Lâm, Huyện Tân Phú, Tỉnh Đồng Nai',
            code: '26155',
            parent_code: '734'
          },
          '26158': {
            name: 'Phú Bình',
            type: 'xa',
            slug: 'phu-binh',
            name_with_type: 'Xã Phú Bình',
            path: 'Phú Bình, Tân Phú, Đồng Nai',
            path_with_type: 'Xã Phú Bình, Huyện Tân Phú, Tỉnh Đồng Nai',
            code: '26158',
            parent_code: '734'
          },
          '26161': {
            name: 'Phú Thanh',
            type: 'xa',
            slug: 'phu-thanh',
            name_with_type: 'Xã Phú Thanh',
            path: 'Phú Thanh, Tân Phú, Đồng Nai',
            path_with_type: 'Xã Phú Thanh, Huyện Tân Phú, Tỉnh Đồng Nai',
            code: '26161',
            parent_code: '734'
          },
          '26164': {
            name: 'Trà Cổ',
            type: 'xa',
            slug: 'tra-co',
            name_with_type: 'Xã Trà Cổ',
            path: 'Trà Cổ, Tân Phú, Đồng Nai',
            path_with_type: 'Xã Trà Cổ, Huyện Tân Phú, Tỉnh Đồng Nai',
            code: '26164',
            parent_code: '734'
          },
          '26167': {
            name: 'Phú Điền',
            type: 'xa',
            slug: 'phu-dien',
            name_with_type: 'Xã Phú Điền',
            path: 'Phú Điền, Tân Phú, Đồng Nai',
            path_with_type: 'Xã Phú Điền, Huyện Tân Phú, Tỉnh Đồng Nai',
            code: '26167',
            parent_code: '734'
          }
        }
      },
      '735': {
        name: 'Vĩnh Cửu',
        type: 'huyen',
        slug: 'vinh-cuu',
        name_with_type: 'Huyện Vĩnh Cửu',
        path: 'Vĩnh Cửu, Đồng Nai',
        path_with_type: 'Huyện Vĩnh Cửu, Tỉnh Đồng Nai',
        code: '735',
        parent_code: '75',
        children: {
          '26170': {
            name: 'Vĩnh An',
            type: 'thi-tran',
            slug: 'vinh-an',
            name_with_type: 'Thị trấn Vĩnh An',
            path: 'Vĩnh An, Vĩnh Cửu, Đồng Nai',
            path_with_type: 'Thị trấn Vĩnh An, Huyện Vĩnh Cửu, Tỉnh Đồng Nai',
            code: '26170',
            parent_code: '735'
          },
          '26173': {
            name: 'Phú Lý',
            type: 'xa',
            slug: 'phu-ly',
            name_with_type: 'Xã Phú Lý',
            path: 'Phú Lý, Vĩnh Cửu, Đồng Nai',
            path_with_type: 'Xã Phú Lý, Huyện Vĩnh Cửu, Tỉnh Đồng Nai',
            code: '26173',
            parent_code: '735'
          },
          '26176': {
            name: 'Trị An',
            type: 'xa',
            slug: 'tri-an',
            name_with_type: 'Xã Trị An',
            path: 'Trị An, Vĩnh Cửu, Đồng Nai',
            path_with_type: 'Xã Trị An, Huyện Vĩnh Cửu, Tỉnh Đồng Nai',
            code: '26176',
            parent_code: '735'
          },
          '26179': {
            name: 'Tân An',
            type: 'xa',
            slug: 'tan-an',
            name_with_type: 'Xã Tân An',
            path: 'Tân An, Vĩnh Cửu, Đồng Nai',
            path_with_type: 'Xã Tân An, Huyện Vĩnh Cửu, Tỉnh Đồng Nai',
            code: '26179',
            parent_code: '735'
          },
          '26182': {
            name: 'Vĩnh Tân',
            type: 'xa',
            slug: 'vinh-tan',
            name_with_type: 'Xã Vĩnh Tân',
            path: 'Vĩnh Tân, Vĩnh Cửu, Đồng Nai',
            path_with_type: 'Xã Vĩnh Tân, Huyện Vĩnh Cửu, Tỉnh Đồng Nai',
            code: '26182',
            parent_code: '735'
          },
          '26185': {
            name: 'Bình Lợi',
            type: 'xa',
            slug: 'binh-loi',
            name_with_type: 'Xã Bình Lợi',
            path: 'Bình Lợi, Vĩnh Cửu, Đồng Nai',
            path_with_type: 'Xã Bình Lợi, Huyện Vĩnh Cửu, Tỉnh Đồng Nai',
            code: '26185',
            parent_code: '735'
          },
          '26188': {
            name: 'Thạnh Phú',
            type: 'xa',
            slug: 'thanh-phu',
            name_with_type: 'Xã Thạnh Phú',
            path: 'Thạnh Phú, Vĩnh Cửu, Đồng Nai',
            path_with_type: 'Xã Thạnh Phú, Huyện Vĩnh Cửu, Tỉnh Đồng Nai',
            code: '26188',
            parent_code: '735'
          },
          '26191': {
            name: 'Thiện Tân',
            type: 'xa',
            slug: 'thien-tan',
            name_with_type: 'Xã Thiện Tân',
            path: 'Thiện Tân, Vĩnh Cửu, Đồng Nai',
            path_with_type: 'Xã Thiện Tân, Huyện Vĩnh Cửu, Tỉnh Đồng Nai',
            code: '26191',
            parent_code: '735'
          },
          '26194': {
            name: 'Tân Bình',
            type: 'xa',
            slug: 'tan-binh',
            name_with_type: 'Xã Tân Bình',
            path: 'Tân Bình, Vĩnh Cửu, Đồng Nai',
            path_with_type: 'Xã Tân Bình, Huyện Vĩnh Cửu, Tỉnh Đồng Nai',
            code: '26194',
            parent_code: '735'
          },
          '26197': {
            name: 'Bình Hòa',
            type: 'xa',
            slug: 'binh-hoa',
            name_with_type: 'Xã Bình Hòa',
            path: 'Bình Hòa, Vĩnh Cửu, Đồng Nai',
            path_with_type: 'Xã Bình Hòa, Huyện Vĩnh Cửu, Tỉnh Đồng Nai',
            code: '26197',
            parent_code: '735'
          },
          '26200': {
            name: 'Mã Đà',
            type: 'xa',
            slug: 'ma-da',
            name_with_type: 'Xã Mã Đà',
            path: 'Mã Đà, Vĩnh Cửu, Đồng Nai',
            path_with_type: 'Xã Mã Đà, Huyện Vĩnh Cửu, Tỉnh Đồng Nai',
            code: '26200',
            parent_code: '735'
          },
          '26203': {
            name: 'Hiếu Liêm',
            type: 'xa',
            slug: 'hieu-liem',
            name_with_type: 'Xã Hiếu Liêm',
            path: 'Hiếu Liêm, Vĩnh Cửu, Đồng Nai',
            path_with_type: 'Xã Hiếu Liêm, Huyện Vĩnh Cửu, Tỉnh Đồng Nai',
            code: '26203',
            parent_code: '735'
          }
        }
      },
      '736': {
        name: 'Định Quán',
        type: 'huyen',
        slug: 'dinh-quan',
        name_with_type: 'Huyện Định Quán',
        path: 'Định Quán, Đồng Nai',
        path_with_type: 'Huyện Định Quán, Tỉnh Đồng Nai',
        code: '736',
        parent_code: '75',
        children: {
          '26206': {
            name: 'Định Quán',
            type: 'thi-tran',
            slug: 'dinh-quan',
            name_with_type: 'Thị trấn Định Quán',
            path: 'Định Quán, Định Quán, Đồng Nai',
            path_with_type: 'Thị trấn Định Quán, Huyện Định Quán, Tỉnh Đồng Nai',
            code: '26206',
            parent_code: '736'
          },
          '26209': {
            name: 'Thanh Sơn',
            type: 'xa',
            slug: 'thanh-son',
            name_with_type: 'Xã Thanh Sơn',
            path: 'Thanh Sơn, Định Quán, Đồng Nai',
            path_with_type: 'Xã Thanh Sơn, Huyện Định Quán, Tỉnh Đồng Nai',
            code: '26209',
            parent_code: '736'
          },
          '26212': {
            name: 'Phú Tân',
            type: 'xa',
            slug: 'phu-tan',
            name_with_type: 'Xã Phú Tân',
            path: 'Phú Tân, Định Quán, Đồng Nai',
            path_with_type: 'Xã Phú Tân, Huyện Định Quán, Tỉnh Đồng Nai',
            code: '26212',
            parent_code: '736'
          },
          '26215': {
            name: 'Phú Vinh',
            type: 'xa',
            slug: 'phu-vinh',
            name_with_type: 'Xã Phú Vinh',
            path: 'Phú Vinh, Định Quán, Đồng Nai',
            path_with_type: 'Xã Phú Vinh, Huyện Định Quán, Tỉnh Đồng Nai',
            code: '26215',
            parent_code: '736'
          },
          '26218': {
            name: 'Phú Lợi',
            type: 'xa',
            slug: 'phu-loi',
            name_with_type: 'Xã Phú Lợi',
            path: 'Phú Lợi, Định Quán, Đồng Nai',
            path_with_type: 'Xã Phú Lợi, Huyện Định Quán, Tỉnh Đồng Nai',
            code: '26218',
            parent_code: '736'
          },
          '26221': {
            name: 'Phú Hòa',
            type: 'xa',
            slug: 'phu-hoa',
            name_with_type: 'Xã Phú Hòa',
            path: 'Phú Hòa, Định Quán, Đồng Nai',
            path_with_type: 'Xã Phú Hòa, Huyện Định Quán, Tỉnh Đồng Nai',
            code: '26221',
            parent_code: '736'
          },
          '26224': {
            name: 'Ngọc Định',
            type: 'xa',
            slug: 'ngoc-dinh',
            name_with_type: 'Xã Ngọc Định',
            path: 'Ngọc Định, Định Quán, Đồng Nai',
            path_with_type: 'Xã Ngọc Định, Huyện Định Quán, Tỉnh Đồng Nai',
            code: '26224',
            parent_code: '736'
          },
          '26227': {
            name: 'La Ngà',
            type: 'xa',
            slug: 'la-nga',
            name_with_type: 'Xã La Ngà',
            path: 'La Ngà, Định Quán, Đồng Nai',
            path_with_type: 'Xã La Ngà, Huyện Định Quán, Tỉnh Đồng Nai',
            code: '26227',
            parent_code: '736'
          },
          '26230': {
            name: 'Gia Canh',
            type: 'xa',
            slug: 'gia-canh',
            name_with_type: 'Xã Gia Canh',
            path: 'Gia Canh, Định Quán, Đồng Nai',
            path_with_type: 'Xã Gia Canh, Huyện Định Quán, Tỉnh Đồng Nai',
            code: '26230',
            parent_code: '736'
          },
          '26233': {
            name: 'Phú Ngọc',
            type: 'xa',
            slug: 'phu-ngoc',
            name_with_type: 'Xã Phú Ngọc',
            path: 'Phú Ngọc, Định Quán, Đồng Nai',
            path_with_type: 'Xã Phú Ngọc, Huyện Định Quán, Tỉnh Đồng Nai',
            code: '26233',
            parent_code: '736'
          },
          '26236': {
            name: 'Phú Cường',
            type: 'xa',
            slug: 'phu-cuong',
            name_with_type: 'Xã Phú Cường',
            path: 'Phú Cường, Định Quán, Đồng Nai',
            path_with_type: 'Xã Phú Cường, Huyện Định Quán, Tỉnh Đồng Nai',
            code: '26236',
            parent_code: '736'
          },
          '26239': {
            name: 'Túc Trưng',
            type: 'xa',
            slug: 'tuc-trung',
            name_with_type: 'Xã Túc Trưng',
            path: 'Túc Trưng, Định Quán, Đồng Nai',
            path_with_type: 'Xã Túc Trưng, Huyện Định Quán, Tỉnh Đồng Nai',
            code: '26239',
            parent_code: '736'
          },
          '26242': {
            name: 'Phú Túc',
            type: 'xa',
            slug: 'phu-tuc',
            name_with_type: 'Xã Phú Túc',
            path: 'Phú Túc, Định Quán, Đồng Nai',
            path_with_type: 'Xã Phú Túc, Huyện Định Quán, Tỉnh Đồng Nai',
            code: '26242',
            parent_code: '736'
          },
          '26245': {
            name: 'Suối Nho',
            type: 'xa',
            slug: 'suoi-nho',
            name_with_type: 'Xã Suối Nho',
            path: 'Suối Nho, Định Quán, Đồng Nai',
            path_with_type: 'Xã Suối Nho, Huyện Định Quán, Tỉnh Đồng Nai',
            code: '26245',
            parent_code: '736'
          }
        }
      },
      '737': {
        name: 'Trảng Bom',
        type: 'huyen',
        slug: 'trang-bom',
        name_with_type: 'Huyện Trảng Bom',
        path: 'Trảng Bom, Đồng Nai',
        path_with_type: 'Huyện Trảng Bom, Tỉnh Đồng Nai',
        code: '737',
        parent_code: '75',
        children: {
          '26248': {
            name: 'Trảng Bom',
            type: 'thi-tran',
            slug: 'trang-bom',
            name_with_type: 'Thị trấn Trảng Bom',
            path: 'Trảng Bom, Trảng Bom, Đồng Nai',
            path_with_type: 'Thị trấn Trảng Bom, Huyện Trảng Bom, Tỉnh Đồng Nai',
            code: '26248',
            parent_code: '737'
          },
          '26251': {
            name: 'Thanh Bình',
            type: 'xa',
            slug: 'thanh-binh',
            name_with_type: 'Xã Thanh Bình',
            path: 'Thanh Bình, Trảng Bom, Đồng Nai',
            path_with_type: 'Xã Thanh Bình, Huyện Trảng Bom, Tỉnh Đồng Nai',
            code: '26251',
            parent_code: '737'
          },
          '26254': {
            name: 'Cây Gáo',
            type: 'xa',
            slug: 'cay-gao',
            name_with_type: 'Xã Cây Gáo',
            path: 'Cây Gáo, Trảng Bom, Đồng Nai',
            path_with_type: 'Xã Cây Gáo, Huyện Trảng Bom, Tỉnh Đồng Nai',
            code: '26254',
            parent_code: '737'
          },
          '26257': {
            name: 'Bàu Hàm',
            type: 'xa',
            slug: 'bau-ham',
            name_with_type: 'Xã Bàu Hàm',
            path: 'Bàu Hàm, Trảng Bom, Đồng Nai',
            path_with_type: 'Xã Bàu Hàm, Huyện Trảng Bom, Tỉnh Đồng Nai',
            code: '26257',
            parent_code: '737'
          },
          '26260': {
            name: 'Sông Thao',
            type: 'xa',
            slug: 'song-thao',
            name_with_type: 'Xã Sông Thao',
            path: 'Sông Thao, Trảng Bom, Đồng Nai',
            path_with_type: 'Xã Sông Thao, Huyện Trảng Bom, Tỉnh Đồng Nai',
            code: '26260',
            parent_code: '737'
          },
          '26263': {
            name: 'Sông Trầu',
            type: 'xa',
            slug: 'song-trau',
            name_with_type: 'Xã Sông Trầu',
            path: 'Sông Trầu, Trảng Bom, Đồng Nai',
            path_with_type: 'Xã Sông Trầu, Huyện Trảng Bom, Tỉnh Đồng Nai',
            code: '26263',
            parent_code: '737'
          },
          '26266': {
            name: 'Đông Hoà',
            type: 'xa',
            slug: 'dong-hoa',
            name_with_type: 'Xã Đông Hoà',
            path: 'Đông Hoà, Trảng Bom, Đồng Nai',
            path_with_type: 'Xã Đông Hoà, Huyện Trảng Bom, Tỉnh Đồng Nai',
            code: '26266',
            parent_code: '737'
          },
          '26269': {
            name: 'Bắc Sơn',
            type: 'xa',
            slug: 'bac-son',
            name_with_type: 'Xã Bắc Sơn',
            path: 'Bắc Sơn, Trảng Bom, Đồng Nai',
            path_with_type: 'Xã Bắc Sơn, Huyện Trảng Bom, Tỉnh Đồng Nai',
            code: '26269',
            parent_code: '737'
          },
          '26272': {
            name: 'Hố Nai 3',
            type: 'xa',
            slug: 'ho-nai-3',
            name_with_type: 'Xã Hố Nai 3',
            path: 'Hố Nai 3, Trảng Bom, Đồng Nai',
            path_with_type: 'Xã Hố Nai 3, Huyện Trảng Bom, Tỉnh Đồng Nai',
            code: '26272',
            parent_code: '737'
          },
          '26275': {
            name: 'Tây Hoà',
            type: 'xa',
            slug: 'tay-hoa',
            name_with_type: 'Xã Tây Hoà',
            path: 'Tây Hoà, Trảng Bom, Đồng Nai',
            path_with_type: 'Xã Tây Hoà, Huyện Trảng Bom, Tỉnh Đồng Nai',
            code: '26275',
            parent_code: '737'
          },
          '26278': {
            name: 'Bình Minh',
            type: 'xa',
            slug: 'binh-minh',
            name_with_type: 'Xã Bình Minh',
            path: 'Bình Minh, Trảng Bom, Đồng Nai',
            path_with_type: 'Xã Bình Minh, Huyện Trảng Bom, Tỉnh Đồng Nai',
            code: '26278',
            parent_code: '737'
          },
          '26281': {
            name: 'Trung Hoà',
            type: 'xa',
            slug: 'trung-hoa',
            name_with_type: 'Xã Trung Hoà',
            path: 'Trung Hoà, Trảng Bom, Đồng Nai',
            path_with_type: 'Xã Trung Hoà, Huyện Trảng Bom, Tỉnh Đồng Nai',
            code: '26281',
            parent_code: '737'
          },
          '26284': {
            name: 'Đồi 61',
            type: 'xa',
            slug: 'doi-61',
            name_with_type: 'Xã Đồi 61',
            path: 'Đồi 61, Trảng Bom, Đồng Nai',
            path_with_type: 'Xã Đồi 61, Huyện Trảng Bom, Tỉnh Đồng Nai',
            code: '26284',
            parent_code: '737'
          },
          '26287': {
            name: 'Hưng Thịnh',
            type: 'xa',
            slug: 'hung-thinh',
            name_with_type: 'Xã Hưng Thịnh',
            path: 'Hưng Thịnh, Trảng Bom, Đồng Nai',
            path_with_type: 'Xã Hưng Thịnh, Huyện Trảng Bom, Tỉnh Đồng Nai',
            code: '26287',
            parent_code: '737'
          },
          '26290': {
            name: 'Quảng Tiến',
            type: 'xa',
            slug: 'quang-tien',
            name_with_type: 'Xã Quảng Tiến',
            path: 'Quảng Tiến, Trảng Bom, Đồng Nai',
            path_with_type: 'Xã Quảng Tiến, Huyện Trảng Bom, Tỉnh Đồng Nai',
            code: '26290',
            parent_code: '737'
          },
          '26293': {
            name: 'Giang Điền',
            type: 'xa',
            slug: 'giang-dien',
            name_with_type: 'Xã Giang Điền',
            path: 'Giang Điền, Trảng Bom, Đồng Nai',
            path_with_type: 'Xã Giang Điền, Huyện Trảng Bom, Tỉnh Đồng Nai',
            code: '26293',
            parent_code: '737'
          },
          '26296': {
            name: 'An Viễn',
            type: 'xa',
            slug: 'an-vien',
            name_with_type: 'Xã An Viễn',
            path: 'An Viễn, Trảng Bom, Đồng Nai',
            path_with_type: 'Xã An Viễn, Huyện Trảng Bom, Tỉnh Đồng Nai',
            code: '26296',
            parent_code: '737'
          }
        }
      },
      '738': {
        name: 'Thống Nhất',
        type: 'huyen',
        slug: 'thong-nhat',
        name_with_type: 'Huyện Thống Nhất',
        path: 'Thống Nhất, Đồng Nai',
        path_with_type: 'Huyện Thống Nhất, Tỉnh Đồng Nai',
        code: '738',
        parent_code: '75',
        children: {
          '26299': {
            name: 'Gia Tân 1',
            type: 'xa',
            slug: 'gia-tan-1',
            name_with_type: 'Xã Gia Tân 1',
            path: 'Gia Tân 1, Thống Nhất, Đồng Nai',
            path_with_type: 'Xã Gia Tân 1, Huyện Thống Nhất, Tỉnh Đồng Nai',
            code: '26299',
            parent_code: '738'
          },
          '26302': {
            name: 'Gia Tân 2',
            type: 'xa',
            slug: 'gia-tan-2',
            name_with_type: 'Xã Gia Tân 2',
            path: 'Gia Tân 2, Thống Nhất, Đồng Nai',
            path_with_type: 'Xã Gia Tân 2, Huyện Thống Nhất, Tỉnh Đồng Nai',
            code: '26302',
            parent_code: '738'
          },
          '26305': {
            name: 'Gia Tân 3',
            type: 'xa',
            slug: 'gia-tan-3',
            name_with_type: 'Xã Gia Tân 3',
            path: 'Gia Tân 3, Thống Nhất, Đồng Nai',
            path_with_type: 'Xã Gia Tân 3, Huyện Thống Nhất, Tỉnh Đồng Nai',
            code: '26305',
            parent_code: '738'
          },
          '26308': {
            name: 'Gia Kiệm',
            type: 'xa',
            slug: 'gia-kiem',
            name_with_type: 'Xã Gia Kiệm',
            path: 'Gia Kiệm, Thống Nhất, Đồng Nai',
            path_with_type: 'Xã Gia Kiệm, Huyện Thống Nhất, Tỉnh Đồng Nai',
            code: '26308',
            parent_code: '738'
          },
          '26311': {
            name: 'Quang Trung',
            type: 'xa',
            slug: 'quang-trung',
            name_with_type: 'Xã Quang Trung',
            path: 'Quang Trung, Thống Nhất, Đồng Nai',
            path_with_type: 'Xã Quang Trung, Huyện Thống Nhất, Tỉnh Đồng Nai',
            code: '26311',
            parent_code: '738'
          },
          '26314': {
            name: 'Bàu Hàm 2',
            type: 'xa',
            slug: 'bau-ham-2',
            name_with_type: 'Xã Bàu Hàm 2',
            path: 'Bàu Hàm 2, Thống Nhất, Đồng Nai',
            path_with_type: 'Xã Bàu Hàm 2, Huyện Thống Nhất, Tỉnh Đồng Nai',
            code: '26314',
            parent_code: '738'
          },
          '26317': {
            name: 'Hưng Lộc',
            type: 'xa',
            slug: 'hung-loc',
            name_with_type: 'Xã Hưng Lộc',
            path: 'Hưng Lộc, Thống Nhất, Đồng Nai',
            path_with_type: 'Xã Hưng Lộc, Huyện Thống Nhất, Tỉnh Đồng Nai',
            code: '26317',
            parent_code: '738'
          },
          '26320': {
            name: 'Lộ 25',
            type: 'xa',
            slug: 'lo-25',
            name_with_type: 'Xã Lộ 25',
            path: 'Lộ 25, Thống Nhất, Đồng Nai',
            path_with_type: 'Xã Lộ 25, Huyện Thống Nhất, Tỉnh Đồng Nai',
            code: '26320',
            parent_code: '738'
          },
          '26323': {
            name: 'Xuân Thiện',
            type: 'xa',
            slug: 'xuan-thien',
            name_with_type: 'Xã Xuân Thiện',
            path: 'Xuân Thiện, Thống Nhất, Đồng Nai',
            path_with_type: 'Xã Xuân Thiện, Huyện Thống Nhất, Tỉnh Đồng Nai',
            code: '26323',
            parent_code: '738'
          },
          '26326': {
            name: 'Dầu Giây',
            type: 'thi-tran',
            slug: 'dau-giay',
            name_with_type: 'Thị trấn Dầu Giây',
            path: 'Dầu Giây, Thống Nhất, Đồng Nai',
            path_with_type: 'Thị trấn Dầu Giây, Huyện Thống Nhất, Tỉnh Đồng Nai',
            code: '26326',
            parent_code: '738'
          }
        }
      },
      '739': {
        name: 'Cẩm Mỹ',
        type: 'huyen',
        slug: 'cam-my',
        name_with_type: 'Huyện Cẩm Mỹ',
        path: 'Cẩm Mỹ, Đồng Nai',
        path_with_type: 'Huyện Cẩm Mỹ, Tỉnh Đồng Nai',
        code: '739',
        parent_code: '75',
        children: {
          '26329': {
            name: 'Sông Nhạn',
            type: 'xa',
            slug: 'song-nhan',
            name_with_type: 'Xã Sông Nhạn',
            path: 'Sông Nhạn, Cẩm Mỹ, Đồng Nai',
            path_with_type: 'Xã Sông Nhạn, Huyện Cẩm Mỹ, Tỉnh Đồng Nai',
            code: '26329',
            parent_code: '739'
          },
          '26332': {
            name: 'Xuân Quế',
            type: 'xa',
            slug: 'xuan-que',
            name_with_type: 'Xã Xuân Quế',
            path: 'Xuân Quế, Cẩm Mỹ, Đồng Nai',
            path_with_type: 'Xã Xuân Quế, Huyện Cẩm Mỹ, Tỉnh Đồng Nai',
            code: '26332',
            parent_code: '739'
          },
          '26335': {
            name: 'Nhân Nghĩa',
            type: 'xa',
            slug: 'nhan-nghia',
            name_with_type: 'Xã Nhân Nghĩa',
            path: 'Nhân Nghĩa, Cẩm Mỹ, Đồng Nai',
            path_with_type: 'Xã Nhân Nghĩa, Huyện Cẩm Mỹ, Tỉnh Đồng Nai',
            code: '26335',
            parent_code: '739'
          },
          '26338': {
            name: 'Xuân Đường',
            type: 'xa',
            slug: 'xuan-duong',
            name_with_type: 'Xã Xuân Đường',
            path: 'Xuân Đường, Cẩm Mỹ, Đồng Nai',
            path_with_type: 'Xã Xuân Đường, Huyện Cẩm Mỹ, Tỉnh Đồng Nai',
            code: '26338',
            parent_code: '739'
          },
          '26341': {
            name: 'Long Giao',
            type: 'xa',
            slug: 'long-giao',
            name_with_type: 'Xã Long Giao',
            path: 'Long Giao, Cẩm Mỹ, Đồng Nai',
            path_with_type: 'Xã Long Giao, Huyện Cẩm Mỹ, Tỉnh Đồng Nai',
            code: '26341',
            parent_code: '739'
          },
          '26344': {
            name: 'Xuân Mỹ',
            type: 'xa',
            slug: 'xuan-my',
            name_with_type: 'Xã Xuân Mỹ',
            path: 'Xuân Mỹ, Cẩm Mỹ, Đồng Nai',
            path_with_type: 'Xã Xuân Mỹ, Huyện Cẩm Mỹ, Tỉnh Đồng Nai',
            code: '26344',
            parent_code: '739'
          },
          '26347': {
            name: 'Thừa Đức',
            type: 'xa',
            slug: 'thua-duc',
            name_with_type: 'Xã Thừa Đức',
            path: 'Thừa Đức, Cẩm Mỹ, Đồng Nai',
            path_with_type: 'Xã Thừa Đức, Huyện Cẩm Mỹ, Tỉnh Đồng Nai',
            code: '26347',
            parent_code: '739'
          },
          '26350': {
            name: 'Bảo Bình',
            type: 'xa',
            slug: 'bao-binh',
            name_with_type: 'Xã Bảo Bình',
            path: 'Bảo Bình, Cẩm Mỹ, Đồng Nai',
            path_with_type: 'Xã Bảo Bình, Huyện Cẩm Mỹ, Tỉnh Đồng Nai',
            code: '26350',
            parent_code: '739'
          },
          '26353': {
            name: 'Xuân Bảo',
            type: 'xa',
            slug: 'xuan-bao',
            name_with_type: 'Xã Xuân Bảo',
            path: 'Xuân Bảo, Cẩm Mỹ, Đồng Nai',
            path_with_type: 'Xã Xuân Bảo, Huyện Cẩm Mỹ, Tỉnh Đồng Nai',
            code: '26353',
            parent_code: '739'
          },
          '26356': {
            name: 'Xuân Tây',
            type: 'xa',
            slug: 'xuan-tay',
            name_with_type: 'Xã Xuân Tây',
            path: 'Xuân Tây, Cẩm Mỹ, Đồng Nai',
            path_with_type: 'Xã Xuân Tây, Huyện Cẩm Mỹ, Tỉnh Đồng Nai',
            code: '26356',
            parent_code: '739'
          },
          '26359': {
            name: 'Xuân Đông',
            type: 'xa',
            slug: 'xuan-dong',
            name_with_type: 'Xã Xuân Đông',
            path: 'Xuân Đông, Cẩm Mỹ, Đồng Nai',
            path_with_type: 'Xã Xuân Đông, Huyện Cẩm Mỹ, Tỉnh Đồng Nai',
            code: '26359',
            parent_code: '739'
          },
          '26362': {
            name: 'Sông Ray',
            type: 'xa',
            slug: 'song-ray',
            name_with_type: 'Xã Sông Ray',
            path: 'Sông Ray, Cẩm Mỹ, Đồng Nai',
            path_with_type: 'Xã Sông Ray, Huyện Cẩm Mỹ, Tỉnh Đồng Nai',
            code: '26362',
            parent_code: '739'
          },
          '26365': {
            name: 'Lâm San',
            type: 'xa',
            slug: 'lam-san',
            name_with_type: 'Xã Lâm San',
            path: 'Lâm San, Cẩm Mỹ, Đồng Nai',
            path_with_type: 'Xã Lâm San, Huyện Cẩm Mỹ, Tỉnh Đồng Nai',
            code: '26365',
            parent_code: '739'
          }
        }
      },
      '740': {
        name: 'Long Thành',
        type: 'huyen',
        slug: 'long-thanh',
        name_with_type: 'Huyện Long Thành',
        path: 'Long Thành, Đồng Nai',
        path_with_type: 'Huyện Long Thành, Tỉnh Đồng Nai',
        code: '740',
        parent_code: '75',
        children: {
          '26368': {
            name: 'Long Thành',
            type: 'thi-tran',
            slug: 'long-thanh',
            name_with_type: 'Thị trấn Long Thành',
            path: 'Long Thành, Long Thành, Đồng Nai',
            path_with_type: 'Thị trấn Long Thành, Huyện Long Thành, Tỉnh Đồng Nai',
            code: '26368',
            parent_code: '740'
          },
          '26383': {
            name: 'An Phước',
            type: 'xa',
            slug: 'an-phuoc',
            name_with_type: 'Xã An Phước',
            path: 'An Phước, Long Thành, Đồng Nai',
            path_with_type: 'Xã An Phước, Huyện Long Thành, Tỉnh Đồng Nai',
            code: '26383',
            parent_code: '740'
          },
          '26386': {
            name: 'Bình An',
            type: 'xa',
            slug: 'binh-an',
            name_with_type: 'Xã Bình An',
            path: 'Bình An, Long Thành, Đồng Nai',
            path_with_type: 'Xã Bình An, Huyện Long Thành, Tỉnh Đồng Nai',
            code: '26386',
            parent_code: '740'
          },
          '26389': {
            name: 'Long Đức',
            type: 'xa',
            slug: 'long-duc',
            name_with_type: 'Xã Long Đức',
            path: 'Long Đức, Long Thành, Đồng Nai',
            path_with_type: 'Xã Long Đức, Huyện Long Thành, Tỉnh Đồng Nai',
            code: '26389',
            parent_code: '740'
          },
          '26392': {
            name: 'Lộc An',
            type: 'xa',
            slug: 'loc-an',
            name_with_type: 'Xã Lộc An',
            path: 'Lộc An, Long Thành, Đồng Nai',
            path_with_type: 'Xã Lộc An, Huyện Long Thành, Tỉnh Đồng Nai',
            code: '26392',
            parent_code: '740'
          },
          '26395': {
            name: 'Bình Sơn',
            type: 'xa',
            slug: 'binh-son',
            name_with_type: 'Xã Bình Sơn',
            path: 'Bình Sơn, Long Thành, Đồng Nai',
            path_with_type: 'Xã Bình Sơn, Huyện Long Thành, Tỉnh Đồng Nai',
            code: '26395',
            parent_code: '740'
          },
          '26398': {
            name: 'Tam An',
            type: 'xa',
            slug: 'tam-an',
            name_with_type: 'Xã Tam An',
            path: 'Tam An, Long Thành, Đồng Nai',
            path_with_type: 'Xã Tam An, Huyện Long Thành, Tỉnh Đồng Nai',
            code: '26398',
            parent_code: '740'
          },
          '26401': {
            name: 'Cẩm Đường',
            type: 'xa',
            slug: 'cam-duong',
            name_with_type: 'Xã Cẩm Đường',
            path: 'Cẩm Đường, Long Thành, Đồng Nai',
            path_with_type: 'Xã Cẩm Đường, Huyện Long Thành, Tỉnh Đồng Nai',
            code: '26401',
            parent_code: '740'
          },
          '26404': {
            name: 'Long An',
            type: 'xa',
            slug: 'long-an',
            name_with_type: 'Xã Long An',
            path: 'Long An, Long Thành, Đồng Nai',
            path_with_type: 'Xã Long An, Huyện Long Thành, Tỉnh Đồng Nai',
            code: '26404',
            parent_code: '740'
          },
          '26410': {
            name: 'Bàu Cạn',
            type: 'xa',
            slug: 'bau-can',
            name_with_type: 'Xã Bàu Cạn',
            path: 'Bàu Cạn, Long Thành, Đồng Nai',
            path_with_type: 'Xã Bàu Cạn, Huyện Long Thành, Tỉnh Đồng Nai',
            code: '26410',
            parent_code: '740'
          },
          '26413': {
            name: 'Long Phước',
            type: 'xa',
            slug: 'long-phuoc',
            name_with_type: 'Xã Long Phước',
            path: 'Long Phước, Long Thành, Đồng Nai',
            path_with_type: 'Xã Long Phước, Huyện Long Thành, Tỉnh Đồng Nai',
            code: '26413',
            parent_code: '740'
          },
          '26416': {
            name: 'Phước Bình',
            type: 'xa',
            slug: 'phuoc-binh',
            name_with_type: 'Xã Phước Bình',
            path: 'Phước Bình, Long Thành, Đồng Nai',
            path_with_type: 'Xã Phước Bình, Huyện Long Thành, Tỉnh Đồng Nai',
            code: '26416',
            parent_code: '740'
          },
          '26419': {
            name: 'Tân Hiệp',
            type: 'xa',
            slug: 'tan-hiep',
            name_with_type: 'Xã Tân Hiệp',
            path: 'Tân Hiệp, Long Thành, Đồng Nai',
            path_with_type: 'Xã Tân Hiệp, Huyện Long Thành, Tỉnh Đồng Nai',
            code: '26419',
            parent_code: '740'
          },
          '26422': {
            name: 'Phước Thái',
            type: 'xa',
            slug: 'phuoc-thai',
            name_with_type: 'Xã Phước Thái',
            path: 'Phước Thái, Long Thành, Đồng Nai',
            path_with_type: 'Xã Phước Thái, Huyện Long Thành, Tỉnh Đồng Nai',
            code: '26422',
            parent_code: '740'
          }
        }
      },
      '741': {
        name: 'Xuân Lộc',
        type: 'huyen',
        slug: 'xuan-loc',
        name_with_type: 'Huyện Xuân Lộc',
        path: 'Xuân Lộc, Đồng Nai',
        path_with_type: 'Huyện Xuân Lộc, Tỉnh Đồng Nai',
        code: '741',
        parent_code: '75',
        children: {
          '26425': {
            name: 'Gia Ray',
            type: 'thi-tran',
            slug: 'gia-ray',
            name_with_type: 'Thị trấn Gia Ray',
            path: 'Gia Ray, Xuân Lộc, Đồng Nai',
            path_with_type: 'Thị trấn Gia Ray, Huyện Xuân Lộc, Tỉnh Đồng Nai',
            code: '26425',
            parent_code: '741'
          },
          '26428': {
            name: 'Xuân Bắc',
            type: 'xa',
            slug: 'xuan-bac',
            name_with_type: 'Xã Xuân Bắc',
            path: 'Xuân Bắc, Xuân Lộc, Đồng Nai',
            path_with_type: 'Xã Xuân Bắc, Huyện Xuân Lộc, Tỉnh Đồng Nai',
            code: '26428',
            parent_code: '741'
          },
          '26431': {
            name: 'Suối Cao',
            type: 'xa',
            slug: 'suoi-cao',
            name_with_type: 'Xã Suối Cao',
            path: 'Suối Cao, Xuân Lộc, Đồng Nai',
            path_with_type: 'Xã Suối Cao, Huyện Xuân Lộc, Tỉnh Đồng Nai',
            code: '26431',
            parent_code: '741'
          },
          '26434': {
            name: 'Xuân Thành',
            type: 'xa',
            slug: 'xuan-thanh',
            name_with_type: 'Xã Xuân Thành',
            path: 'Xuân Thành, Xuân Lộc, Đồng Nai',
            path_with_type: 'Xã Xuân Thành, Huyện Xuân Lộc, Tỉnh Đồng Nai',
            code: '26434',
            parent_code: '741'
          },
          '26437': {
            name: 'Xuân Thọ',
            type: 'xa',
            slug: 'xuan-tho',
            name_with_type: 'Xã Xuân Thọ',
            path: 'Xuân Thọ, Xuân Lộc, Đồng Nai',
            path_with_type: 'Xã Xuân Thọ, Huyện Xuân Lộc, Tỉnh Đồng Nai',
            code: '26437',
            parent_code: '741'
          },
          '26440': {
            name: 'Xuân Trường',
            type: 'xa',
            slug: 'xuan-truong',
            name_with_type: 'Xã Xuân Trường',
            path: 'Xuân Trường, Xuân Lộc, Đồng Nai',
            path_with_type: 'Xã Xuân Trường, Huyện Xuân Lộc, Tỉnh Đồng Nai',
            code: '26440',
            parent_code: '741'
          },
          '26443': {
            name: 'Xuân Hòa',
            type: 'xa',
            slug: 'xuan-hoa',
            name_with_type: 'Xã Xuân Hòa',
            path: 'Xuân Hòa, Xuân Lộc, Đồng Nai',
            path_with_type: 'Xã Xuân Hòa, Huyện Xuân Lộc, Tỉnh Đồng Nai',
            code: '26443',
            parent_code: '741'
          },
          '26446': {
            name: 'Xuân Hưng',
            type: 'xa',
            slug: 'xuan-hung',
            name_with_type: 'Xã Xuân Hưng',
            path: 'Xuân Hưng, Xuân Lộc, Đồng Nai',
            path_with_type: 'Xã Xuân Hưng, Huyện Xuân Lộc, Tỉnh Đồng Nai',
            code: '26446',
            parent_code: '741'
          },
          '26449': {
            name: 'Xuân Tâm',
            type: 'xa',
            slug: 'xuan-tam',
            name_with_type: 'Xã Xuân Tâm',
            path: 'Xuân Tâm, Xuân Lộc, Đồng Nai',
            path_with_type: 'Xã Xuân Tâm, Huyện Xuân Lộc, Tỉnh Đồng Nai',
            code: '26449',
            parent_code: '741'
          },
          '26452': {
            name: 'Suối Cát',
            type: 'xa',
            slug: 'suoi-cat',
            name_with_type: 'Xã Suối Cát',
            path: 'Suối Cát, Xuân Lộc, Đồng Nai',
            path_with_type: 'Xã Suối Cát, Huyện Xuân Lộc, Tỉnh Đồng Nai',
            code: '26452',
            parent_code: '741'
          },
          '26455': {
            name: 'Xuân Hiệp',
            type: 'xa',
            slug: 'xuan-hiep',
            name_with_type: 'Xã Xuân Hiệp',
            path: 'Xuân Hiệp, Xuân Lộc, Đồng Nai',
            path_with_type: 'Xã Xuân Hiệp, Huyện Xuân Lộc, Tỉnh Đồng Nai',
            code: '26455',
            parent_code: '741'
          },
          '26458': {
            name: 'Xuân Phú',
            type: 'xa',
            slug: 'xuan-phu',
            name_with_type: 'Xã Xuân Phú',
            path: 'Xuân Phú, Xuân Lộc, Đồng Nai',
            path_with_type: 'Xã Xuân Phú, Huyện Xuân Lộc, Tỉnh Đồng Nai',
            code: '26458',
            parent_code: '741'
          },
          '26461': {
            name: 'Xuân Định',
            type: 'xa',
            slug: 'xuan-dinh',
            name_with_type: 'Xã Xuân Định',
            path: 'Xuân Định, Xuân Lộc, Đồng Nai',
            path_with_type: 'Xã Xuân Định, Huyện Xuân Lộc, Tỉnh Đồng Nai',
            code: '26461',
            parent_code: '741'
          },
          '26464': {
            name: 'Bảo Hoà',
            type: 'xa',
            slug: 'bao-hoa',
            name_with_type: 'Xã Bảo Hoà',
            path: 'Bảo Hoà, Xuân Lộc, Đồng Nai',
            path_with_type: 'Xã Bảo Hoà, Huyện Xuân Lộc, Tỉnh Đồng Nai',
            code: '26464',
            parent_code: '741'
          },
          '26467': {
            name: 'Lang Minh',
            type: 'xa',
            slug: 'lang-minh',
            name_with_type: 'Xã Lang Minh',
            path: 'Lang Minh, Xuân Lộc, Đồng Nai',
            path_with_type: 'Xã Lang Minh, Huyện Xuân Lộc, Tỉnh Đồng Nai',
            code: '26467',
            parent_code: '741'
          }
        }
      },
      '742': {
        name: 'Nhơn Trạch',
        type: 'huyen',
        slug: 'nhon-trach',
        name_with_type: 'Huyện Nhơn Trạch',
        path: 'Nhơn Trạch, Đồng Nai',
        path_with_type: 'Huyện Nhơn Trạch, Tỉnh Đồng Nai',
        code: '742',
        parent_code: '75',
        children: {
          '26470': {
            name: 'Phước Thiền',
            type: 'xa',
            slug: 'phuoc-thien',
            name_with_type: 'Xã Phước Thiền',
            path: 'Phước Thiền, Nhơn Trạch, Đồng Nai',
            path_with_type: 'Xã Phước Thiền, Huyện Nhơn Trạch, Tỉnh Đồng Nai',
            code: '26470',
            parent_code: '742'
          },
          '26473': {
            name: 'Long Tân',
            type: 'xa',
            slug: 'long-tan',
            name_with_type: 'Xã Long Tân',
            path: 'Long Tân, Nhơn Trạch, Đồng Nai',
            path_with_type: 'Xã Long Tân, Huyện Nhơn Trạch, Tỉnh Đồng Nai',
            code: '26473',
            parent_code: '742'
          },
          '26476': {
            name: 'Đại Phước',
            type: 'xa',
            slug: 'dai-phuoc',
            name_with_type: 'Xã Đại Phước',
            path: 'Đại Phước, Nhơn Trạch, Đồng Nai',
            path_with_type: 'Xã Đại Phước, Huyện Nhơn Trạch, Tỉnh Đồng Nai',
            code: '26476',
            parent_code: '742'
          },
          '26479': {
            name: 'Hiệp Phước',
            type: 'thi-tran',
            slug: 'hiep-phuoc',
            name_with_type: 'Thị trấn Hiệp Phước',
            path: 'Hiệp Phước, Nhơn Trạch, Đồng Nai',
            path_with_type: 'Thị trấn Hiệp Phước, Huyện Nhơn Trạch, Tỉnh Đồng Nai',
            code: '26479',
            parent_code: '742'
          },
          '26482': {
            name: 'Phú Hữu',
            type: 'xa',
            slug: 'phu-huu',
            name_with_type: 'Xã Phú Hữu',
            path: 'Phú Hữu, Nhơn Trạch, Đồng Nai',
            path_with_type: 'Xã Phú Hữu, Huyện Nhơn Trạch, Tỉnh Đồng Nai',
            code: '26482',
            parent_code: '742'
          },
          '26485': {
            name: 'Phú Hội',
            type: 'xa',
            slug: 'phu-hoi',
            name_with_type: 'Xã Phú Hội',
            path: 'Phú Hội, Nhơn Trạch, Đồng Nai',
            path_with_type: 'Xã Phú Hội, Huyện Nhơn Trạch, Tỉnh Đồng Nai',
            code: '26485',
            parent_code: '742'
          },
          '26488': {
            name: 'Phú Thạnh',
            type: 'xa',
            slug: 'phu-thanh',
            name_with_type: 'Xã Phú Thạnh',
            path: 'Phú Thạnh, Nhơn Trạch, Đồng Nai',
            path_with_type: 'Xã Phú Thạnh, Huyện Nhơn Trạch, Tỉnh Đồng Nai',
            code: '26488',
            parent_code: '742'
          },
          '26491': {
            name: 'Phú Đông',
            type: 'xa',
            slug: 'phu-dong',
            name_with_type: 'Xã Phú Đông',
            path: 'Phú Đông, Nhơn Trạch, Đồng Nai',
            path_with_type: 'Xã Phú Đông, Huyện Nhơn Trạch, Tỉnh Đồng Nai',
            code: '26491',
            parent_code: '742'
          },
          '26494': {
            name: 'Long Thọ',
            type: 'xa',
            slug: 'long-tho',
            name_with_type: 'Xã Long Thọ',
            path: 'Long Thọ, Nhơn Trạch, Đồng Nai',
            path_with_type: 'Xã Long Thọ, Huyện Nhơn Trạch, Tỉnh Đồng Nai',
            code: '26494',
            parent_code: '742'
          },
          '26497': {
            name: 'Vĩnh Thanh',
            type: 'xa',
            slug: 'vinh-thanh',
            name_with_type: 'Xã Vĩnh Thanh',
            path: 'Vĩnh Thanh, Nhơn Trạch, Đồng Nai',
            path_with_type: 'Xã Vĩnh Thanh, Huyện Nhơn Trạch, Tỉnh Đồng Nai',
            code: '26497',
            parent_code: '742'
          },
          '26500': {
            name: 'Phước Khánh',
            type: 'xa',
            slug: 'phuoc-khanh',
            name_with_type: 'Xã Phước Khánh',
            path: 'Phước Khánh, Nhơn Trạch, Đồng Nai',
            path_with_type: 'Xã Phước Khánh, Huyện Nhơn Trạch, Tỉnh Đồng Nai',
            code: '26500',
            parent_code: '742'
          },
          '26503': {
            name: 'Phước An',
            type: 'xa',
            slug: 'phuoc-an',
            name_with_type: 'Xã Phước An',
            path: 'Phước An, Nhơn Trạch, Đồng Nai',
            path_with_type: 'Xã Phước An, Huyện Nhơn Trạch, Tỉnh Đồng Nai',
            code: '26503',
            parent_code: '742'
          }
        }
      }
    }
  },
  '79': {
    name: 'Hồ Chí Minh',
    slug: 'ho-chi-minh',
    type: 'thanh-pho',
    name_with_type: 'Thành phố Hồ Chí Minh',
    code: '79',
    children: {
      '760': {
        name: '1',
        type: 'quan',
        slug: '1',
        name_with_type: 'Quận 1',
        path: '1, Hồ Chí Minh',
        path_with_type: 'Quận 1, Thành phố Hồ Chí Minh',
        code: '760',
        parent_code: '79',
        children: {
          '26734': {
            name: 'Tân Định',
            type: 'phuong',
            slug: 'tan-dinh',
            name_with_type: 'Phường Tân Định',
            path: 'Tân Định, 1, Hồ Chí Minh',
            path_with_type: 'Phường Tân Định, Quận 1, Thành phố Hồ Chí Minh',
            code: '26734',
            parent_code: '760'
          },
          '26737': {
            name: 'Đa Kao',
            type: 'phuong',
            slug: 'da-kao',
            name_with_type: 'Phường Đa Kao',
            path: 'Đa Kao, 1, Hồ Chí Minh',
            path_with_type: 'Phường Đa Kao, Quận 1, Thành phố Hồ Chí Minh',
            code: '26737',
            parent_code: '760'
          },
          '26740': {
            name: 'Bến Nghé',
            type: 'phuong',
            slug: 'ben-nghe',
            name_with_type: 'Phường Bến Nghé',
            path: 'Bến Nghé, 1, Hồ Chí Minh',
            path_with_type: 'Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',
            code: '26740',
            parent_code: '760'
          },
          '26743': {
            name: 'Bến Thành',
            type: 'phuong',
            slug: 'ben-thanh',
            name_with_type: 'Phường Bến Thành',
            path: 'Bến Thành, 1, Hồ Chí Minh',
            path_with_type: 'Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh',
            code: '26743',
            parent_code: '760'
          },
          '26746': {
            name: 'Nguyễn Thái Bình',
            type: 'phuong',
            slug: 'nguyen-thai-binh',
            name_with_type: 'Phường Nguyễn Thái Bình',
            path: 'Nguyễn Thái Bình, 1, Hồ Chí Minh',
            path_with_type: 'Phường Nguyễn Thái Bình, Quận 1, Thành phố Hồ Chí Minh',
            code: '26746',
            parent_code: '760'
          },
          '26749': {
            name: 'Phạm Ngũ Lão',
            type: 'phuong',
            slug: 'pham-ngu-lao',
            name_with_type: 'Phường Phạm Ngũ Lão',
            path: 'Phạm Ngũ Lão, 1, Hồ Chí Minh',
            path_with_type: 'Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh',
            code: '26749',
            parent_code: '760'
          },
          '26752': {
            name: 'Cầu Ông Lãnh',
            type: 'phuong',
            slug: 'cau-ong-lanh',
            name_with_type: 'Phường Cầu Ông Lãnh',
            path: 'Cầu Ông Lãnh, 1, Hồ Chí Minh',
            path_with_type: 'Phường Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí Minh',
            code: '26752',
            parent_code: '760'
          },
          '26755': {
            name: 'Cô Giang',
            type: 'phuong',
            slug: 'co-giang',
            name_with_type: 'Phường Cô Giang',
            path: 'Cô Giang, 1, Hồ Chí Minh',
            path_with_type: 'Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh',
            code: '26755',
            parent_code: '760'
          },
          '26758': {
            name: 'Nguyễn Cư Trinh',
            type: 'phuong',
            slug: 'nguyen-cu-trinh',
            name_with_type: 'Phường Nguyễn Cư Trinh',
            path: 'Nguyễn Cư Trinh, 1, Hồ Chí Minh',
            path_with_type: 'Phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh',
            code: '26758',
            parent_code: '760'
          },
          '26761': {
            name: 'Cầu Kho',
            type: 'phuong',
            slug: 'cau-kho',
            name_with_type: 'Phường Cầu Kho',
            path: 'Cầu Kho, 1, Hồ Chí Minh',
            path_with_type: 'Phường Cầu Kho, Quận 1, Thành phố Hồ Chí Minh',
            code: '26761',
            parent_code: '760'
          }
        }
      },
      '761': {
        name: '12',
        type: 'quan',
        slug: '12',
        name_with_type: 'Quận 12',
        path: '12, Hồ Chí Minh',
        path_with_type: 'Quận 12, Thành phố Hồ Chí Minh',
        code: '761',
        parent_code: '79',
        children: {
          '26764': {
            name: 'Thạnh Xuân',
            type: 'phuong',
            slug: 'thanh-xuan',
            name_with_type: 'Phường Thạnh Xuân',
            path: 'Thạnh Xuân, 12, Hồ Chí Minh',
            path_with_type: 'Phường Thạnh Xuân, Quận 12, Thành phố Hồ Chí Minh',
            code: '26764',
            parent_code: '761'
          },
          '26767': {
            name: 'Thạnh Lộc',
            type: 'phuong',
            slug: 'thanh-loc',
            name_with_type: 'Phường Thạnh Lộc',
            path: 'Thạnh Lộc, 12, Hồ Chí Minh',
            path_with_type: 'Phường Thạnh Lộc, Quận 12, Thành phố Hồ Chí Minh',
            code: '26767',
            parent_code: '761'
          },
          '26770': {
            name: 'Hiệp Thành',
            type: 'phuong',
            slug: 'hiep-thanh',
            name_with_type: 'Phường Hiệp Thành',
            path: 'Hiệp Thành, 12, Hồ Chí Minh',
            path_with_type: 'Phường Hiệp Thành, Quận 12, Thành phố Hồ Chí Minh',
            code: '26770',
            parent_code: '761'
          },
          '26773': {
            name: 'Thới An',
            type: 'phuong',
            slug: 'thoi-an',
            name_with_type: 'Phường Thới An',
            path: 'Thới An, 12, Hồ Chí Minh',
            path_with_type: 'Phường Thới An, Quận 12, Thành phố Hồ Chí Minh',
            code: '26773',
            parent_code: '761'
          },
          '26776': {
            name: 'Tân Chánh Hiệp',
            type: 'phuong',
            slug: 'tan-chanh-hiep',
            name_with_type: 'Phường Tân Chánh Hiệp',
            path: 'Tân Chánh Hiệp, 12, Hồ Chí Minh',
            path_with_type: 'Phường Tân Chánh Hiệp, Quận 12, Thành phố Hồ Chí Minh',
            code: '26776',
            parent_code: '761'
          },
          '26779': {
            name: 'An Phú Đông',
            type: 'phuong',
            slug: 'an-phu-dong',
            name_with_type: 'Phường An Phú Đông',
            path: 'An Phú Đông, 12, Hồ Chí Minh',
            path_with_type: 'Phường An Phú Đông, Quận 12, Thành phố Hồ Chí Minh',
            code: '26779',
            parent_code: '761'
          },
          '26782': {
            name: 'Tân Thới Hiệp',
            type: 'phuong',
            slug: 'tan-thoi-hiep',
            name_with_type: 'Phường Tân Thới Hiệp',
            path: 'Tân Thới Hiệp, 12, Hồ Chí Minh',
            path_with_type: 'Phường Tân Thới Hiệp, Quận 12, Thành phố Hồ Chí Minh',
            code: '26782',
            parent_code: '761'
          },
          '26785': {
            name: 'Trung Mỹ Tây',
            type: 'phuong',
            slug: 'trung-my-tay',
            name_with_type: 'Phường Trung Mỹ Tây',
            path: 'Trung Mỹ Tây, 12, Hồ Chí Minh',
            path_with_type: 'Phường Trung Mỹ Tây, Quận 12, Thành phố Hồ Chí Minh',
            code: '26785',
            parent_code: '761'
          },
          '26787': {
            name: 'Tân Hưng Thuận',
            type: 'phuong',
            slug: 'tan-hung-thuan',
            name_with_type: 'Phường Tân Hưng Thuận',
            path: 'Tân Hưng Thuận, 12, Hồ Chí Minh',
            path_with_type: 'Phường Tân Hưng Thuận, Quận 12, Thành phố Hồ Chí Minh',
            code: '26787',
            parent_code: '761'
          },
          '26788': {
            name: 'Đông Hưng Thuận',
            type: 'phuong',
            slug: 'dong-hung-thuan',
            name_with_type: 'Phường Đông Hưng Thuận',
            path: 'Đông Hưng Thuận, 12, Hồ Chí Minh',
            path_with_type: 'Phường Đông Hưng Thuận, Quận 12, Thành phố Hồ Chí Minh',
            code: '26788',
            parent_code: '761'
          },
          '26791': {
            name: 'Tân Thới Nhất',
            type: 'phuong',
            slug: 'tan-thoi-nhat',
            name_with_type: 'Phường Tân Thới Nhất',
            path: 'Tân Thới Nhất, 12, Hồ Chí Minh',
            path_with_type: 'Phường Tân Thới Nhất, Quận 12, Thành phố Hồ Chí Minh',
            code: '26791',
            parent_code: '761'
          }
        }
      },
      '764': {
        name: 'Gò Vấp',
        type: 'quan',
        slug: 'go-vap',
        name_with_type: 'Quận Gò Vấp',
        path: 'Gò Vấp, Hồ Chí Minh',
        path_with_type: 'Quận Gò Vấp, Thành phố Hồ Chí Minh',
        code: '764',
        parent_code: '79',
        children: {
          '26869': {
            name: '15',
            type: 'phuong',
            slug: '15',
            name_with_type: 'Phường 15',
            path: '15, Gò Vấp, Hồ Chí Minh',
            path_with_type: 'Phường 15, Quận Gò Vấp, Thành phố Hồ Chí Minh',
            code: '26869',
            parent_code: '764'
          },
          '26872': {
            name: '13',
            type: 'phuong',
            slug: '13',
            name_with_type: 'Phường 13',
            path: '13, Gò Vấp, Hồ Chí Minh',
            path_with_type: 'Phường 13, Quận Gò Vấp, Thành phố Hồ Chí Minh',
            code: '26872',
            parent_code: '764'
          },
          '26875': {
            name: '17',
            type: 'phuong',
            slug: '17',
            name_with_type: 'Phường 17',
            path: '17, Gò Vấp, Hồ Chí Minh',
            path_with_type: 'Phường 17, Quận Gò Vấp, Thành phố Hồ Chí Minh',
            code: '26875',
            parent_code: '764'
          },
          '26876': {
            name: '6',
            type: 'phuong',
            slug: '6',
            name_with_type: 'Phường 6',
            path: '6, Gò Vấp, Hồ Chí Minh',
            path_with_type: 'Phường 6, Quận Gò Vấp, Thành phố Hồ Chí Minh',
            code: '26876',
            parent_code: '764'
          },
          '26878': {
            name: '16',
            type: 'phuong',
            slug: '16',
            name_with_type: 'Phường 16',
            path: '16, Gò Vấp, Hồ Chí Minh',
            path_with_type: 'Phường 16, Quận Gò Vấp, Thành phố Hồ Chí Minh',
            code: '26878',
            parent_code: '764'
          },
          '26881': {
            name: '12',
            type: 'phuong',
            slug: '12',
            name_with_type: 'Phường 12',
            path: '12, Gò Vấp, Hồ Chí Minh',
            path_with_type: 'Phường 12, Quận Gò Vấp, Thành phố Hồ Chí Minh',
            code: '26881',
            parent_code: '764'
          },
          '26882': {
            name: '14',
            type: 'phuong',
            slug: '14',
            name_with_type: 'Phường 14',
            path: '14, Gò Vấp, Hồ Chí Minh',
            path_with_type: 'Phường 14, Quận Gò Vấp, Thành phố Hồ Chí Minh',
            code: '26882',
            parent_code: '764'
          },
          '26884': {
            name: '10',
            type: 'phuong',
            slug: '10',
            name_with_type: 'Phường 10',
            path: '10, Gò Vấp, Hồ Chí Minh',
            path_with_type: 'Phường 10, Quận Gò Vấp, Thành phố Hồ Chí Minh',
            code: '26884',
            parent_code: '764'
          },
          '26887': {
            name: '05',
            type: 'phuong',
            slug: '05',
            name_with_type: 'Phường 05',
            path: '05, Gò Vấp, Hồ Chí Minh',
            path_with_type: 'Phường 05, Quận Gò Vấp, Thành phố Hồ Chí Minh',
            code: '26887',
            parent_code: '764'
          },
          '26890': {
            name: '07',
            type: 'phuong',
            slug: '07',
            name_with_type: 'Phường 07',
            path: '07, Gò Vấp, Hồ Chí Minh',
            path_with_type: 'Phường 07, Quận Gò Vấp, Thành phố Hồ Chí Minh',
            code: '26890',
            parent_code: '764'
          },
          '26893': {
            name: '04',
            type: 'phuong',
            slug: '04',
            name_with_type: 'Phường 04',
            path: '04, Gò Vấp, Hồ Chí Minh',
            path_with_type: 'Phường 04, Quận Gò Vấp, Thành phố Hồ Chí Minh',
            code: '26893',
            parent_code: '764'
          },
          '26896': {
            name: '01',
            type: 'phuong',
            slug: '01',
            name_with_type: 'Phường 01',
            path: '01, Gò Vấp, Hồ Chí Minh',
            path_with_type: 'Phường 01, Quận Gò Vấp, Thành phố Hồ Chí Minh',
            code: '26896',
            parent_code: '764'
          },
          '26897': {
            name: '9',
            type: 'phuong',
            slug: '9',
            name_with_type: 'Phường 9',
            path: '9, Gò Vấp, Hồ Chí Minh',
            path_with_type: 'Phường 9, Quận Gò Vấp, Thành phố Hồ Chí Minh',
            code: '26897',
            parent_code: '764'
          },
          '26898': {
            name: '8',
            type: 'phuong',
            slug: '8',
            name_with_type: 'Phường 8',
            path: '8, Gò Vấp, Hồ Chí Minh',
            path_with_type: 'Phường 8, Quận Gò Vấp, Thành phố Hồ Chí Minh',
            code: '26898',
            parent_code: '764'
          },
          '26899': {
            name: '11',
            type: 'phuong',
            slug: '11',
            name_with_type: 'Phường 11',
            path: '11, Gò Vấp, Hồ Chí Minh',
            path_with_type: 'Phường 11, Quận Gò Vấp, Thành phố Hồ Chí Minh',
            code: '26899',
            parent_code: '764'
          },
          '26902': {
            name: '03',
            type: 'phuong',
            slug: '03',
            name_with_type: 'Phường 03',
            path: '03, Gò Vấp, Hồ Chí Minh',
            path_with_type: 'Phường 03, Quận Gò Vấp, Thành phố Hồ Chí Minh',
            code: '26902',
            parent_code: '764'
          }
        }
      },
      '765': {
        name: 'Bình Thạnh',
        type: 'quan',
        slug: 'binh-thanh',
        name_with_type: 'Quận Bình Thạnh',
        path: 'Bình Thạnh, Hồ Chí Minh',
        path_with_type: 'Quận Bình Thạnh, Thành phố Hồ Chí Minh',
        code: '765',
        parent_code: '79',
        children: {
          '26905': {
            name: '13',
            type: 'phuong',
            slug: '13',
            name_with_type: 'Phường 13',
            path: '13, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 13, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26905',
            parent_code: '765'
          },
          '26908': {
            name: '11',
            type: 'phuong',
            slug: '11',
            name_with_type: 'Phường 11',
            path: '11, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 11, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26908',
            parent_code: '765'
          },
          '26911': {
            name: '27',
            type: 'phuong',
            slug: '27',
            name_with_type: 'Phường 27',
            path: '27, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 27, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26911',
            parent_code: '765'
          },
          '26914': {
            name: '26',
            type: 'phuong',
            slug: '26',
            name_with_type: 'Phường 26',
            path: '26, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 26, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26914',
            parent_code: '765'
          },
          '26917': {
            name: '12',
            type: 'phuong',
            slug: '12',
            name_with_type: 'Phường 12',
            path: '12, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 12, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26917',
            parent_code: '765'
          },
          '26920': {
            name: '25',
            type: 'phuong',
            slug: '25',
            name_with_type: 'Phường 25',
            path: '25, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26920',
            parent_code: '765'
          },
          '26923': {
            name: '05',
            type: 'phuong',
            slug: '05',
            name_with_type: 'Phường 05',
            path: '05, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 05, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26923',
            parent_code: '765'
          },
          '26926': {
            name: '07',
            type: 'phuong',
            slug: '07',
            name_with_type: 'Phường 07',
            path: '07, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 07, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26926',
            parent_code: '765'
          },
          '26929': {
            name: '24',
            type: 'phuong',
            slug: '24',
            name_with_type: 'Phường 24',
            path: '24, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 24, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26929',
            parent_code: '765'
          },
          '26932': {
            name: '06',
            type: 'phuong',
            slug: '06',
            name_with_type: 'Phường 06',
            path: '06, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 06, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26932',
            parent_code: '765'
          },
          '26935': {
            name: '14',
            type: 'phuong',
            slug: '14',
            name_with_type: 'Phường 14',
            path: '14, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 14, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26935',
            parent_code: '765'
          },
          '26938': {
            name: '15',
            type: 'phuong',
            slug: '15',
            name_with_type: 'Phường 15',
            path: '15, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 15, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26938',
            parent_code: '765'
          },
          '26941': {
            name: '02',
            type: 'phuong',
            slug: '02',
            name_with_type: 'Phường 02',
            path: '02, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 02, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26941',
            parent_code: '765'
          },
          '26944': {
            name: '01',
            type: 'phuong',
            slug: '01',
            name_with_type: 'Phường 01',
            path: '01, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 01, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26944',
            parent_code: '765'
          },
          '26947': {
            name: '03',
            type: 'phuong',
            slug: '03',
            name_with_type: 'Phường 03',
            path: '03, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 03, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26947',
            parent_code: '765'
          },
          '26950': {
            name: '17',
            type: 'phuong',
            slug: '17',
            name_with_type: 'Phường 17',
            path: '17, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 17, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26950',
            parent_code: '765'
          },
          '26953': {
            name: '21',
            type: 'phuong',
            slug: '21',
            name_with_type: 'Phường 21',
            path: '21, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 21, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26953',
            parent_code: '765'
          },
          '26956': {
            name: '22',
            type: 'phuong',
            slug: '22',
            name_with_type: 'Phường 22',
            path: '22, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 22, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26956',
            parent_code: '765'
          },
          '26959': {
            name: '19',
            type: 'phuong',
            slug: '19',
            name_with_type: 'Phường 19',
            path: '19, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 19, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26959',
            parent_code: '765'
          },
          '26962': {
            name: '28',
            type: 'phuong',
            slug: '28',
            name_with_type: 'Phường 28',
            path: '28, Bình Thạnh, Hồ Chí Minh',
            path_with_type: 'Phường 28, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
            code: '26962',
            parent_code: '765'
          }
        }
      },
      '766': {
        name: 'Tân Bình',
        type: 'quan',
        slug: 'tan-binh',
        name_with_type: 'Quận Tân Bình',
        path: 'Tân Bình, Hồ Chí Minh',
        path_with_type: 'Quận Tân Bình, Thành phố Hồ Chí Minh',
        code: '766',
        parent_code: '79',
        children: {
          '26965': {
            name: '02',
            type: 'phuong',
            slug: '02',
            name_with_type: 'Phường 02',
            path: '02, Tân Bình, Hồ Chí Minh',
            path_with_type: 'Phường 02, Quận Tân Bình, Thành phố Hồ Chí Minh',
            code: '26965',
            parent_code: '766'
          },
          '26968': {
            name: '04',
            type: 'phuong',
            slug: '04',
            name_with_type: 'Phường 04',
            path: '04, Tân Bình, Hồ Chí Minh',
            path_with_type: 'Phường 04, Quận Tân Bình, Thành phố Hồ Chí Minh',
            code: '26968',
            parent_code: '766'
          },
          '26971': {
            name: '12',
            type: 'phuong',
            slug: '12',
            name_with_type: 'Phường 12',
            path: '12, Tân Bình, Hồ Chí Minh',
            path_with_type: 'Phường 12, Quận Tân Bình, Thành phố Hồ Chí Minh',
            code: '26971',
            parent_code: '766'
          },
          '26974': {
            name: '13',
            type: 'phuong',
            slug: '13',
            name_with_type: 'Phường 13',
            path: '13, Tân Bình, Hồ Chí Minh',
            path_with_type: 'Phường 13, Quận Tân Bình, Thành phố Hồ Chí Minh',
            code: '26974',
            parent_code: '766'
          },
          '26977': {
            name: '01',
            type: 'phuong',
            slug: '01',
            name_with_type: 'Phường 01',
            path: '01, Tân Bình, Hồ Chí Minh',
            path_with_type: 'Phường 01, Quận Tân Bình, Thành phố Hồ Chí Minh',
            code: '26977',
            parent_code: '766'
          },
          '26980': {
            name: '03',
            type: 'phuong',
            slug: '03',
            name_with_type: 'Phường 03',
            path: '03, Tân Bình, Hồ Chí Minh',
            path_with_type: 'Phường 03, Quận Tân Bình, Thành phố Hồ Chí Minh',
            code: '26980',
            parent_code: '766'
          },
          '26983': {
            name: '11',
            type: 'phuong',
            slug: '11',
            name_with_type: 'Phường 11',
            path: '11, Tân Bình, Hồ Chí Minh',
            path_with_type: 'Phường 11, Quận Tân Bình, Thành phố Hồ Chí Minh',
            code: '26983',
            parent_code: '766'
          },
          '26986': {
            name: '07',
            type: 'phuong',
            slug: '07',
            name_with_type: 'Phường 07',
            path: '07, Tân Bình, Hồ Chí Minh',
            path_with_type: 'Phường 07, Quận Tân Bình, Thành phố Hồ Chí Minh',
            code: '26986',
            parent_code: '766'
          },
          '26989': {
            name: '05',
            type: 'phuong',
            slug: '05',
            name_with_type: 'Phường 05',
            path: '05, Tân Bình, Hồ Chí Minh',
            path_with_type: 'Phường 05, Quận Tân Bình, Thành phố Hồ Chí Minh',
            code: '26989',
            parent_code: '766'
          },
          '26992': {
            name: '10',
            type: 'phuong',
            slug: '10',
            name_with_type: 'Phường 10',
            path: '10, Tân Bình, Hồ Chí Minh',
            path_with_type: 'Phường 10, Quận Tân Bình, Thành phố Hồ Chí Minh',
            code: '26992',
            parent_code: '766'
          },
          '26995': {
            name: '06',
            type: 'phuong',
            slug: '06',
            name_with_type: 'Phường 06',
            path: '06, Tân Bình, Hồ Chí Minh',
            path_with_type: 'Phường 06, Quận Tân Bình, Thành phố Hồ Chí Minh',
            code: '26995',
            parent_code: '766'
          },
          '26998': {
            name: '08',
            type: 'phuong',
            slug: '08',
            name_with_type: 'Phường 08',
            path: '08, Tân Bình, Hồ Chí Minh',
            path_with_type: 'Phường 08, Quận Tân Bình, Thành phố Hồ Chí Minh',
            code: '26998',
            parent_code: '766'
          },
          '27001': {
            name: '09',
            type: 'phuong',
            slug: '09',
            name_with_type: 'Phường 09',
            path: '09, Tân Bình, Hồ Chí Minh',
            path_with_type: 'Phường 09, Quận Tân Bình, Thành phố Hồ Chí Minh',
            code: '27001',
            parent_code: '766'
          },
          '27004': {
            name: '14',
            type: 'phuong',
            slug: '14',
            name_with_type: 'Phường 14',
            path: '14, Tân Bình, Hồ Chí Minh',
            path_with_type: 'Phường 14, Quận Tân Bình, Thành phố Hồ Chí Minh',
            code: '27004',
            parent_code: '766'
          },
          '27007': {
            name: '15',
            type: 'phuong',
            slug: '15',
            name_with_type: 'Phường 15',
            path: '15, Tân Bình, Hồ Chí Minh',
            path_with_type: 'Phường 15, Quận Tân Bình, Thành phố Hồ Chí Minh',
            code: '27007',
            parent_code: '766'
          }
        }
      },
      '767': {
        name: 'Tân Phú',
        type: 'quan',
        slug: 'tan-phu',
        name_with_type: 'Quận Tân Phú',
        path: 'Tân Phú, Hồ Chí Minh',
        path_with_type: 'Quận Tân Phú, Thành phố Hồ Chí Minh',
        code: '767',
        parent_code: '79',
        children: {
          '27010': {
            name: 'Tân Sơn Nhì',
            type: 'phuong',
            slug: 'tan-son-nhi',
            name_with_type: 'Phường Tân Sơn Nhì',
            path: 'Tân Sơn Nhì, Tân Phú, Hồ Chí Minh',
            path_with_type: 'Phường Tân Sơn Nhì, Quận Tân Phú, Thành phố Hồ Chí Minh',
            code: '27010',
            parent_code: '767'
          },
          '27013': {
            name: 'Tây Thạnh',
            type: 'phuong',
            slug: 'tay-thanh',
            name_with_type: 'Phường Tây Thạnh',
            path: 'Tây Thạnh, Tân Phú, Hồ Chí Minh',
            path_with_type: 'Phường Tây Thạnh, Quận Tân Phú, Thành phố Hồ Chí Minh',
            code: '27013',
            parent_code: '767'
          },
          '27016': {
            name: 'Sơn Kỳ',
            type: 'phuong',
            slug: 'son-ky',
            name_with_type: 'Phường Sơn Kỳ',
            path: 'Sơn Kỳ, Tân Phú, Hồ Chí Minh',
            path_with_type: 'Phường Sơn Kỳ, Quận Tân Phú, Thành phố Hồ Chí Minh',
            code: '27016',
            parent_code: '767'
          },
          '27019': {
            name: 'Tân Quý',
            type: 'phuong',
            slug: 'tan-quy',
            name_with_type: 'Phường Tân Quý',
            path: 'Tân Quý, Tân Phú, Hồ Chí Minh',
            path_with_type: 'Phường Tân Quý, Quận Tân Phú, Thành phố Hồ Chí Minh',
            code: '27019',
            parent_code: '767'
          },
          '27022': {
            name: 'Tân Thành',
            type: 'phuong',
            slug: 'tan-thanh',
            name_with_type: 'Phường Tân Thành',
            path: 'Tân Thành, Tân Phú, Hồ Chí Minh',
            path_with_type: 'Phường Tân Thành, Quận Tân Phú, Thành phố Hồ Chí Minh',
            code: '27022',
            parent_code: '767'
          },
          '27025': {
            name: 'Phú Thọ Hòa',
            type: 'phuong',
            slug: 'phu-tho-hoa',
            name_with_type: 'Phường Phú Thọ Hòa',
            path: 'Phú Thọ Hòa, Tân Phú, Hồ Chí Minh',
            path_with_type: 'Phường Phú Thọ Hòa, Quận Tân Phú, Thành phố Hồ Chí Minh',
            code: '27025',
            parent_code: '767'
          },
          '27028': {
            name: 'Phú Thạnh',
            type: 'phuong',
            slug: 'phu-thanh',
            name_with_type: 'Phường Phú Thạnh',
            path: 'Phú Thạnh, Tân Phú, Hồ Chí Minh',
            path_with_type: 'Phường Phú Thạnh, Quận Tân Phú, Thành phố Hồ Chí Minh',
            code: '27028',
            parent_code: '767'
          },
          '27031': {
            name: 'Phú Trung',
            type: 'phuong',
            slug: 'phu-trung',
            name_with_type: 'Phường Phú Trung',
            path: 'Phú Trung, Tân Phú, Hồ Chí Minh',
            path_with_type: 'Phường Phú Trung, Quận Tân Phú, Thành phố Hồ Chí Minh',
            code: '27031',
            parent_code: '767'
          },
          '27034': {
            name: 'Hòa Thạnh',
            type: 'phuong',
            slug: 'hoa-thanh',
            name_with_type: 'Phường Hòa Thạnh',
            path: 'Hòa Thạnh, Tân Phú, Hồ Chí Minh',
            path_with_type: 'Phường Hòa Thạnh, Quận Tân Phú, Thành phố Hồ Chí Minh',
            code: '27034',
            parent_code: '767'
          },
          '27037': {
            name: 'Hiệp Tân',
            type: 'phuong',
            slug: 'hiep-tan',
            name_with_type: 'Phường Hiệp Tân',
            path: 'Hiệp Tân, Tân Phú, Hồ Chí Minh',
            path_with_type: 'Phường Hiệp Tân, Quận Tân Phú, Thành phố Hồ Chí Minh',
            code: '27037',
            parent_code: '767'
          },
          '27040': {
            name: 'Tân Thới Hòa',
            type: 'phuong',
            slug: 'tan-thoi-hoa',
            name_with_type: 'Phường Tân Thới Hòa',
            path: 'Tân Thới Hòa, Tân Phú, Hồ Chí Minh',
            path_with_type: 'Phường Tân Thới Hòa, Quận Tân Phú, Thành phố Hồ Chí Minh',
            code: '27040',
            parent_code: '767'
          }
        }
      },
      '768': {
        name: 'Phú Nhuận',
        type: 'quan',
        slug: 'phu-nhuan',
        name_with_type: 'Quận Phú Nhuận',
        path: 'Phú Nhuận, Hồ Chí Minh',
        path_with_type: 'Quận Phú Nhuận, Thành phố Hồ Chí Minh',
        code: '768',
        parent_code: '79',
        children: {
          '27043': {
            name: '04',
            type: 'phuong',
            slug: '04',
            name_with_type: 'Phường 04',
            path: '04, Phú Nhuận, Hồ Chí Minh',
            path_with_type: 'Phường 04, Quận Phú Nhuận, Thành phố Hồ Chí Minh',
            code: '27043',
            parent_code: '768'
          },
          '27046': {
            name: '05',
            type: 'phuong',
            slug: '05',
            name_with_type: 'Phường 05',
            path: '05, Phú Nhuận, Hồ Chí Minh',
            path_with_type: 'Phường 05, Quận Phú Nhuận, Thành phố Hồ Chí Minh',
            code: '27046',
            parent_code: '768'
          },
          '27049': {
            name: '09',
            type: 'phuong',
            slug: '09',
            name_with_type: 'Phường 09',
            path: '09, Phú Nhuận, Hồ Chí Minh',
            path_with_type: 'Phường 09, Quận Phú Nhuận, Thành phố Hồ Chí Minh',
            code: '27049',
            parent_code: '768'
          },
          '27052': {
            name: '07',
            type: 'phuong',
            slug: '07',
            name_with_type: 'Phường 07',
            path: '07, Phú Nhuận, Hồ Chí Minh',
            path_with_type: 'Phường 07, Quận Phú Nhuận, Thành phố Hồ Chí Minh',
            code: '27052',
            parent_code: '768'
          },
          '27055': {
            name: '03',
            type: 'phuong',
            slug: '03',
            name_with_type: 'Phường 03',
            path: '03, Phú Nhuận, Hồ Chí Minh',
            path_with_type: 'Phường 03, Quận Phú Nhuận, Thành phố Hồ Chí Minh',
            code: '27055',
            parent_code: '768'
          },
          '27058': {
            name: '01',
            type: 'phuong',
            slug: '01',
            name_with_type: 'Phường 01',
            path: '01, Phú Nhuận, Hồ Chí Minh',
            path_with_type: 'Phường 01, Quận Phú Nhuận, Thành phố Hồ Chí Minh',
            code: '27058',
            parent_code: '768'
          },
          '27061': {
            name: '02',
            type: 'phuong',
            slug: '02',
            name_with_type: 'Phường 02',
            path: '02, Phú Nhuận, Hồ Chí Minh',
            path_with_type: 'Phường 02, Quận Phú Nhuận, Thành phố Hồ Chí Minh',
            code: '27061',
            parent_code: '768'
          },
          '27064': {
            name: '08',
            type: 'phuong',
            slug: '08',
            name_with_type: 'Phường 08',
            path: '08, Phú Nhuận, Hồ Chí Minh',
            path_with_type: 'Phường 08, Quận Phú Nhuận, Thành phố Hồ Chí Minh',
            code: '27064',
            parent_code: '768'
          },
          '27067': {
            name: '15',
            type: 'phuong',
            slug: '15',
            name_with_type: 'Phường 15',
            path: '15, Phú Nhuận, Hồ Chí Minh',
            path_with_type: 'Phường 15, Quận Phú Nhuận, Thành phố Hồ Chí Minh',
            code: '27067',
            parent_code: '768'
          },
          '27070': {
            name: '10',
            type: 'phuong',
            slug: '10',
            name_with_type: 'Phường 10',
            path: '10, Phú Nhuận, Hồ Chí Minh',
            path_with_type: 'Phường 10, Quận Phú Nhuận, Thành phố Hồ Chí Minh',
            code: '27070',
            parent_code: '768'
          },
          '27073': {
            name: '11',
            type: 'phuong',
            slug: '11',
            name_with_type: 'Phường 11',
            path: '11, Phú Nhuận, Hồ Chí Minh',
            path_with_type: 'Phường 11, Quận Phú Nhuận, Thành phố Hồ Chí Minh',
            code: '27073',
            parent_code: '768'
          },
          '27076': {
            name: '17',
            type: 'phuong',
            slug: '17',
            name_with_type: 'Phường 17',
            path: '17, Phú Nhuận, Hồ Chí Minh',
            path_with_type: 'Phường 17, Quận Phú Nhuận, Thành phố Hồ Chí Minh',
            code: '27076',
            parent_code: '768'
          },
          '27085': {
            name: '13',
            type: 'phuong',
            slug: '13',
            name_with_type: 'Phường 13',
            path: '13, Phú Nhuận, Hồ Chí Minh',
            path_with_type: 'Phường 13, Quận Phú Nhuận, Thành phố Hồ Chí Minh',
            code: '27085',
            parent_code: '768'
          }
        }
      },
      '769': {
        name: 'Thủ Đức',
        type: 'thanh-pho',
        slug: 'thu-duc',
        name_with_type: 'Thành phố Thủ Đức',
        path: 'Thủ Đức, Hồ Chí Minh',
        path_with_type: 'Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
        code: '769',
        parent_code: '79',
        children: {
          '26794': {
            name: 'Linh Xuân',
            type: 'phuong',
            slug: 'linh-xuan',
            name_with_type: 'Phường Linh Xuân',
            path: 'Linh Xuân, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Linh Xuân, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26794',
            parent_code: '769'
          },
          '26797': {
            name: 'Bình Chiểu',
            type: 'phuong',
            slug: 'binh-chieu',
            name_with_type: 'Phường Bình Chiểu',
            path: 'Bình Chiểu, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Bình Chiểu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26797',
            parent_code: '769'
          },
          '26800': {
            name: 'Linh Trung',
            type: 'phuong',
            slug: 'linh-trung',
            name_with_type: 'Phường Linh Trung',
            path: 'Linh Trung, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Linh Trung, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26800',
            parent_code: '769'
          },
          '26803': {
            name: 'Tam Bình',
            type: 'phuong',
            slug: 'tam-binh',
            name_with_type: 'Phường Tam Bình',
            path: 'Tam Bình, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Tam Bình, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26803',
            parent_code: '769'
          },
          '26806': {
            name: 'Tam Phú',
            type: 'phuong',
            slug: 'tam-phu',
            name_with_type: 'Phường Tam Phú',
            path: 'Tam Phú, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Tam Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26806',
            parent_code: '769'
          },
          '26809': {
            name: 'Hiệp Bình Phước',
            type: 'phuong',
            slug: 'hiep-binh-phuoc',
            name_with_type: 'Phường Hiệp Bình Phước',
            path: 'Hiệp Bình Phước, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Hiệp Bình Phước, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26809',
            parent_code: '769'
          },
          '26812': {
            name: 'Hiệp Bình Chánh',
            type: 'phuong',
            slug: 'hiep-binh-chanh',
            name_with_type: 'Phường Hiệp Bình Chánh',
            path: 'Hiệp Bình Chánh, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Hiệp Bình Chánh, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26812',
            parent_code: '769'
          },
          '26815': {
            name: 'Linh Chiểu',
            type: 'phuong',
            slug: 'linh-chieu',
            name_with_type: 'Phường Linh Chiểu',
            path: 'Linh Chiểu, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Linh Chiểu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26815',
            parent_code: '769'
          },
          '26818': {
            name: 'Linh Tây',
            type: 'phuong',
            slug: 'linh-tay',
            name_with_type: 'Phường Linh Tây',
            path: 'Linh Tây, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Linh Tây, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26818',
            parent_code: '769'
          },
          '26821': {
            name: 'Linh Đông',
            type: 'phuong',
            slug: 'linh-dong',
            name_with_type: 'Phường Linh Đông',
            path: 'Linh Đông, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Linh Đông, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26821',
            parent_code: '769'
          },
          '26824': {
            name: 'Bình Thọ',
            type: 'phuong',
            slug: 'binh-tho',
            name_with_type: 'Phường Bình Thọ',
            path: 'Bình Thọ, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Bình Thọ, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26824',
            parent_code: '769'
          },
          '26827': {
            name: 'Trường Thọ',
            type: 'phuong',
            slug: 'truong-tho',
            name_with_type: 'Phường Trường Thọ',
            path: 'Trường Thọ, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Trường Thọ, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26827',
            parent_code: '769'
          },
          '26830': {
            name: 'Long Bình',
            type: 'phuong',
            slug: 'long-binh',
            name_with_type: 'Phường Long Bình',
            path: 'Long Bình, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Long Bình, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26830',
            parent_code: '769'
          },
          '26833': {
            name: 'Long Thạnh Mỹ',
            type: 'phuong',
            slug: 'long-thanh-my',
            name_with_type: 'Phường Long Thạnh Mỹ',
            path: 'Long Thạnh Mỹ, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Long Thạnh Mỹ, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26833',
            parent_code: '769'
          },
          '26836': {
            name: 'Tân Phú',
            type: 'phuong',
            slug: 'tan-phu',
            name_with_type: 'Phường Tân Phú',
            path: 'Tân Phú, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Tân Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26836',
            parent_code: '769'
          },
          '26839': {
            name: 'Hiệp Phú',
            type: 'phuong',
            slug: 'hiep-phu',
            name_with_type: 'Phường Hiệp Phú',
            path: 'Hiệp Phú, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Hiệp Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26839',
            parent_code: '769'
          },
          '26842': {
            name: 'Tăng Nhơn Phú A',
            type: 'phuong',
            slug: 'tang-nhon-phu-a',
            name_with_type: 'Phường Tăng Nhơn Phú A',
            path: 'Tăng Nhơn Phú A, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Tăng Nhơn Phú A, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26842',
            parent_code: '769'
          },
          '26845': {
            name: 'Tăng Nhơn Phú B',
            type: 'phuong',
            slug: 'tang-nhon-phu-b',
            name_with_type: 'Phường Tăng Nhơn Phú B',
            path: 'Tăng Nhơn Phú B, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Tăng Nhơn Phú B, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26845',
            parent_code: '769'
          },
          '26848': {
            name: 'Phước Long B',
            type: 'phuong',
            slug: 'phuoc-long-b',
            name_with_type: 'Phường Phước Long B',
            path: 'Phước Long B, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Phước Long B, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26848',
            parent_code: '769'
          },
          '26851': {
            name: 'Phước Long A',
            type: 'phuong',
            slug: 'phuoc-long-a',
            name_with_type: 'Phường Phước Long A',
            path: 'Phước Long A, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Phước Long A, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26851',
            parent_code: '769'
          },
          '26854': {
            name: 'Trường Thạnh',
            type: 'phuong',
            slug: 'truong-thanh',
            name_with_type: 'Phường Trường Thạnh',
            path: 'Trường Thạnh, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Trường Thạnh, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26854',
            parent_code: '769'
          },
          '26857': {
            name: 'Long Phước',
            type: 'phuong',
            slug: 'long-phuoc',
            name_with_type: 'Phường Long Phước',
            path: 'Long Phước, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Long Phước, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26857',
            parent_code: '769'
          },
          '26860': {
            name: 'Long Trường',
            type: 'phuong',
            slug: 'long-truong',
            name_with_type: 'Phường Long Trường',
            path: 'Long Trường, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Long Trường, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26860',
            parent_code: '769'
          },
          '26863': {
            name: 'Phước Bình',
            type: 'phuong',
            slug: 'phuoc-binh',
            name_with_type: 'Phường Phước Bình',
            path: 'Phước Bình, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Phước Bình, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26863',
            parent_code: '769'
          },
          '26866': {
            name: 'Phú Hữu',
            type: 'phuong',
            slug: 'phu-huu',
            name_with_type: 'Phường Phú Hữu',
            path: 'Phú Hữu, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Phú Hữu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '26866',
            parent_code: '769'
          },
          '27088': {
            name: 'Thảo Điền',
            type: 'phuong',
            slug: 'thao-dien',
            name_with_type: 'Phường Thảo Điền',
            path: 'Thảo Điền, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Thảo Điền, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '27088',
            parent_code: '769'
          },
          '27091': {
            name: 'An Phú',
            type: 'phuong',
            slug: 'an-phu',
            name_with_type: 'Phường An Phú',
            path: 'An Phú, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường An Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '27091',
            parent_code: '769'
          },
          '27094': {
            name: 'An Khánh',
            type: 'phuong',
            slug: 'an-khanh',
            name_with_type: 'Phường An Khánh',
            path: 'An Khánh, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường An Khánh, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '27094',
            parent_code: '769'
          },
          '27097': {
            name: 'Bình Trưng Đông',
            type: 'phuong',
            slug: 'binh-trung-dong',
            name_with_type: 'Phường Bình Trưng Đông',
            path: 'Bình Trưng Đông, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Bình Trưng Đông, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '27097',
            parent_code: '769'
          },
          '27100': {
            name: 'Bình Trưng Tây',
            type: 'phuong',
            slug: 'binh-trung-tay',
            name_with_type: 'Phường Bình Trưng Tây',
            path: 'Bình Trưng Tây, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Bình Trưng Tây, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '27100',
            parent_code: '769'
          },
          '27109': {
            name: 'Cát Lái',
            type: 'phuong',
            slug: 'cat-lai',
            name_with_type: 'Phường Cát Lái',
            path: 'Cát Lái, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Cát Lái, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '27109',
            parent_code: '769'
          },
          '27112': {
            name: 'Thạnh Mỹ Lợi',
            type: 'phuong',
            slug: 'thanh-my-loi',
            name_with_type: 'Phường Thạnh Mỹ Lợi',
            path: 'Thạnh Mỹ Lợi, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Thạnh Mỹ Lợi, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '27112',
            parent_code: '769'
          },
          '27115': {
            name: 'An Lợi Đông',
            type: 'phuong',
            slug: 'an-loi-dong',
            name_with_type: 'Phường An Lợi Đông',
            path: 'An Lợi Đông, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường An Lợi Đông, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '27115',
            parent_code: '769'
          },
          '27118': {
            name: 'Thủ Thiêm',
            type: 'phuong',
            slug: 'thu-thiem',
            name_with_type: 'Phường Thủ Thiêm',
            path: 'Thủ Thiêm, Thủ Đức, Hồ Chí Minh',
            path_with_type: 'Phường Thủ Thiêm, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            code: '27118',
            parent_code: '769'
          }
        }
      },
      '770': {
        name: '3',
        type: 'quan',
        slug: '3',
        name_with_type: 'Quận 3',
        path: '3, Hồ Chí Minh',
        path_with_type: 'Quận 3, Thành phố Hồ Chí Minh',
        code: '770',
        parent_code: '79',
        children: {
          '27127': {
            name: '14',
            type: 'phuong',
            slug: '14',
            name_with_type: 'Phường 14',
            path: '14, 3, Hồ Chí Minh',
            path_with_type: 'Phường 14, Quận 3, Thành phố Hồ Chí Minh',
            code: '27127',
            parent_code: '770'
          },
          '27130': {
            name: '12',
            type: 'phuong',
            slug: '12',
            name_with_type: 'Phường 12',
            path: '12, 3, Hồ Chí Minh',
            path_with_type: 'Phường 12, Quận 3, Thành phố Hồ Chí Minh',
            code: '27130',
            parent_code: '770'
          },
          '27133': {
            name: '11',
            type: 'phuong',
            slug: '11',
            name_with_type: 'Phường 11',
            path: '11, 3, Hồ Chí Minh',
            path_with_type: 'Phường 11, Quận 3, Thành phố Hồ Chí Minh',
            code: '27133',
            parent_code: '770'
          },
          '27136': {
            name: '13',
            type: 'phuong',
            slug: '13',
            name_with_type: 'Phường 13',
            path: '13, 3, Hồ Chí Minh',
            path_with_type: 'Phường 13, Quận 3, Thành phố Hồ Chí Minh',
            code: '27136',
            parent_code: '770'
          },
          '27139': {
            name: 'Võ Thị Sáu',
            type: 'phuong',
            slug: 'vo-thi-sau',
            name_with_type: 'Phường Võ Thị Sáu',
            path: 'Võ Thị Sáu, 3, Hồ Chí Minh',
            path_with_type: 'Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh',
            code: '27139',
            parent_code: '770'
          },
          '27142': {
            name: '09',
            type: 'phuong',
            slug: '09',
            name_with_type: 'Phường 09',
            path: '09, 3, Hồ Chí Minh',
            path_with_type: 'Phường 09, Quận 3, Thành phố Hồ Chí Minh',
            code: '27142',
            parent_code: '770'
          },
          '27145': {
            name: '10',
            type: 'phuong',
            slug: '10',
            name_with_type: 'Phường 10',
            path: '10, 3, Hồ Chí Minh',
            path_with_type: 'Phường 10, Quận 3, Thành phố Hồ Chí Minh',
            code: '27145',
            parent_code: '770'
          },
          '27148': {
            name: '04',
            type: 'phuong',
            slug: '04',
            name_with_type: 'Phường 04',
            path: '04, 3, Hồ Chí Minh',
            path_with_type: 'Phường 04, Quận 3, Thành phố Hồ Chí Minh',
            code: '27148',
            parent_code: '770'
          },
          '27151': {
            name: '05',
            type: 'phuong',
            slug: '05',
            name_with_type: 'Phường 05',
            path: '05, 3, Hồ Chí Minh',
            path_with_type: 'Phường 05, Quận 3, Thành phố Hồ Chí Minh',
            code: '27151',
            parent_code: '770'
          },
          '27154': {
            name: '03',
            type: 'phuong',
            slug: '03',
            name_with_type: 'Phường 03',
            path: '03, 3, Hồ Chí Minh',
            path_with_type: 'Phường 03, Quận 3, Thành phố Hồ Chí Minh',
            code: '27154',
            parent_code: '770'
          },
          '27157': {
            name: '02',
            type: 'phuong',
            slug: '02',
            name_with_type: 'Phường 02',
            path: '02, 3, Hồ Chí Minh',
            path_with_type: 'Phường 02, Quận 3, Thành phố Hồ Chí Minh',
            code: '27157',
            parent_code: '770'
          },
          '27160': {
            name: '01',
            type: 'phuong',
            slug: '01',
            name_with_type: 'Phường 01',
            path: '01, 3, Hồ Chí Minh',
            path_with_type: 'Phường 01, Quận 3, Thành phố Hồ Chí Minh',
            code: '27160',
            parent_code: '770'
          }
        }
      },
      '771': {
        name: '10',
        type: 'quan',
        slug: '10',
        name_with_type: 'Quận 10',
        path: '10, Hồ Chí Minh',
        path_with_type: 'Quận 10, Thành phố Hồ Chí Minh',
        code: '771',
        parent_code: '79',
        children: {
          '27163': {
            name: '15',
            type: 'phuong',
            slug: '15',
            name_with_type: 'Phường 15',
            path: '15, 10, Hồ Chí Minh',
            path_with_type: 'Phường 15, Quận 10, Thành phố Hồ Chí Minh',
            code: '27163',
            parent_code: '771'
          },
          '27166': {
            name: '13',
            type: 'phuong',
            slug: '13',
            name_with_type: 'Phường 13',
            path: '13, 10, Hồ Chí Minh',
            path_with_type: 'Phường 13, Quận 10, Thành phố Hồ Chí Minh',
            code: '27166',
            parent_code: '771'
          },
          '27169': {
            name: '14',
            type: 'phuong',
            slug: '14',
            name_with_type: 'Phường 14',
            path: '14, 10, Hồ Chí Minh',
            path_with_type: 'Phường 14, Quận 10, Thành phố Hồ Chí Minh',
            code: '27169',
            parent_code: '771'
          },
          '27172': {
            name: '12',
            type: 'phuong',
            slug: '12',
            name_with_type: 'Phường 12',
            path: '12, 10, Hồ Chí Minh',
            path_with_type: 'Phường 12, Quận 10, Thành phố Hồ Chí Minh',
            code: '27172',
            parent_code: '771'
          },
          '27175': {
            name: '11',
            type: 'phuong',
            slug: '11',
            name_with_type: 'Phường 11',
            path: '11, 10, Hồ Chí Minh',
            path_with_type: 'Phường 11, Quận 10, Thành phố Hồ Chí Minh',
            code: '27175',
            parent_code: '771'
          },
          '27178': {
            name: '10',
            type: 'phuong',
            slug: '10',
            name_with_type: 'Phường 10',
            path: '10, 10, Hồ Chí Minh',
            path_with_type: 'Phường 10, Quận 10, Thành phố Hồ Chí Minh',
            code: '27178',
            parent_code: '771'
          },
          '27181': {
            name: '09',
            type: 'phuong',
            slug: '09',
            name_with_type: 'Phường 09',
            path: '09, 10, Hồ Chí Minh',
            path_with_type: 'Phường 09, Quận 10, Thành phố Hồ Chí Minh',
            code: '27181',
            parent_code: '771'
          },
          '27184': {
            name: '01',
            type: 'phuong',
            slug: '01',
            name_with_type: 'Phường 01',
            path: '01, 10, Hồ Chí Minh',
            path_with_type: 'Phường 01, Quận 10, Thành phố Hồ Chí Minh',
            code: '27184',
            parent_code: '771'
          },
          '27187': {
            name: '08',
            type: 'phuong',
            slug: '08',
            name_with_type: 'Phường 08',
            path: '08, 10, Hồ Chí Minh',
            path_with_type: 'Phường 08, Quận 10, Thành phố Hồ Chí Minh',
            code: '27187',
            parent_code: '771'
          },
          '27190': {
            name: '02',
            type: 'phuong',
            slug: '02',
            name_with_type: 'Phường 02',
            path: '02, 10, Hồ Chí Minh',
            path_with_type: 'Phường 02, Quận 10, Thành phố Hồ Chí Minh',
            code: '27190',
            parent_code: '771'
          },
          '27193': {
            name: '04',
            type: 'phuong',
            slug: '04',
            name_with_type: 'Phường 04',
            path: '04, 10, Hồ Chí Minh',
            path_with_type: 'Phường 04, Quận 10, Thành phố Hồ Chí Minh',
            code: '27193',
            parent_code: '771'
          },
          '27196': {
            name: '07',
            type: 'phuong',
            slug: '07',
            name_with_type: 'Phường 07',
            path: '07, 10, Hồ Chí Minh',
            path_with_type: 'Phường 07, Quận 10, Thành phố Hồ Chí Minh',
            code: '27196',
            parent_code: '771'
          },
          '27199': {
            name: '05',
            type: 'phuong',
            slug: '05',
            name_with_type: 'Phường 05',
            path: '05, 10, Hồ Chí Minh',
            path_with_type: 'Phường 05, Quận 10, Thành phố Hồ Chí Minh',
            code: '27199',
            parent_code: '771'
          },
          '27202': {
            name: '06',
            type: 'phuong',
            slug: '06',
            name_with_type: 'Phường 06',
            path: '06, 10, Hồ Chí Minh',
            path_with_type: 'Phường 06, Quận 10, Thành phố Hồ Chí Minh',
            code: '27202',
            parent_code: '771'
          }
        }
      },
      '772': {
        name: '11',
        type: 'quan',
        slug: '11',
        name_with_type: 'Quận 11',
        path: '11, Hồ Chí Minh',
        path_with_type: 'Quận 11, Thành phố Hồ Chí Minh',
        code: '772',
        parent_code: '79',
        children: {
          '27208': {
            name: '15',
            type: 'phuong',
            slug: '15',
            name_with_type: 'Phường 15',
            path: '15, 11, Hồ Chí Minh',
            path_with_type: 'Phường 15, Quận 11, Thành phố Hồ Chí Minh',
            code: '27208',
            parent_code: '772'
          },
          '27211': {
            name: '05',
            type: 'phuong',
            slug: '05',
            name_with_type: 'Phường 05',
            path: '05, 11, Hồ Chí Minh',
            path_with_type: 'Phường 05, Quận 11, Thành phố Hồ Chí Minh',
            code: '27211',
            parent_code: '772'
          },
          '27214': {
            name: '14',
            type: 'phuong',
            slug: '14',
            name_with_type: 'Phường 14',
            path: '14, 11, Hồ Chí Minh',
            path_with_type: 'Phường 14, Quận 11, Thành phố Hồ Chí Minh',
            code: '27214',
            parent_code: '772'
          },
          '27217': {
            name: '11',
            type: 'phuong',
            slug: '11',
            name_with_type: 'Phường 11',
            path: '11, 11, Hồ Chí Minh',
            path_with_type: 'Phường 11, Quận 11, Thành phố Hồ Chí Minh',
            code: '27217',
            parent_code: '772'
          },
          '27220': {
            name: '03',
            type: 'phuong',
            slug: '03',
            name_with_type: 'Phường 03',
            path: '03, 11, Hồ Chí Minh',
            path_with_type: 'Phường 03, Quận 11, Thành phố Hồ Chí Minh',
            code: '27220',
            parent_code: '772'
          },
          '27223': {
            name: '10',
            type: 'phuong',
            slug: '10',
            name_with_type: 'Phường 10',
            path: '10, 11, Hồ Chí Minh',
            path_with_type: 'Phường 10, Quận 11, Thành phố Hồ Chí Minh',
            code: '27223',
            parent_code: '772'
          },
          '27226': {
            name: '13',
            type: 'phuong',
            slug: '13',
            name_with_type: 'Phường 13',
            path: '13, 11, Hồ Chí Minh',
            path_with_type: 'Phường 13, Quận 11, Thành phố Hồ Chí Minh',
            code: '27226',
            parent_code: '772'
          },
          '27229': {
            name: '08',
            type: 'phuong',
            slug: '08',
            name_with_type: 'Phường 08',
            path: '08, 11, Hồ Chí Minh',
            path_with_type: 'Phường 08, Quận 11, Thành phố Hồ Chí Minh',
            code: '27229',
            parent_code: '772'
          },
          '27232': {
            name: '09',
            type: 'phuong',
            slug: '09',
            name_with_type: 'Phường 09',
            path: '09, 11, Hồ Chí Minh',
            path_with_type: 'Phường 09, Quận 11, Thành phố Hồ Chí Minh',
            code: '27232',
            parent_code: '772'
          },
          '27235': {
            name: '12',
            type: 'phuong',
            slug: '12',
            name_with_type: 'Phường 12',
            path: '12, 11, Hồ Chí Minh',
            path_with_type: 'Phường 12, Quận 11, Thành phố Hồ Chí Minh',
            code: '27235',
            parent_code: '772'
          },
          '27238': {
            name: '07',
            type: 'phuong',
            slug: '07',
            name_with_type: 'Phường 07',
            path: '07, 11, Hồ Chí Minh',
            path_with_type: 'Phường 07, Quận 11, Thành phố Hồ Chí Minh',
            code: '27238',
            parent_code: '772'
          },
          '27241': {
            name: '06',
            type: 'phuong',
            slug: '06',
            name_with_type: 'Phường 06',
            path: '06, 11, Hồ Chí Minh',
            path_with_type: 'Phường 06, Quận 11, Thành phố Hồ Chí Minh',
            code: '27241',
            parent_code: '772'
          },
          '27244': {
            name: '04',
            type: 'phuong',
            slug: '04',
            name_with_type: 'Phường 04',
            path: '04, 11, Hồ Chí Minh',
            path_with_type: 'Phường 04, Quận 11, Thành phố Hồ Chí Minh',
            code: '27244',
            parent_code: '772'
          },
          '27247': {
            name: '01',
            type: 'phuong',
            slug: '01',
            name_with_type: 'Phường 01',
            path: '01, 11, Hồ Chí Minh',
            path_with_type: 'Phường 01, Quận 11, Thành phố Hồ Chí Minh',
            code: '27247',
            parent_code: '772'
          },
          '27250': {
            name: '02',
            type: 'phuong',
            slug: '02',
            name_with_type: 'Phường 02',
            path: '02, 11, Hồ Chí Minh',
            path_with_type: 'Phường 02, Quận 11, Thành phố Hồ Chí Minh',
            code: '27250',
            parent_code: '772'
          },
          '27253': {
            name: '16',
            type: 'phuong',
            slug: '16',
            name_with_type: 'Phường 16',
            path: '16, 11, Hồ Chí Minh',
            path_with_type: 'Phường 16, Quận 11, Thành phố Hồ Chí Minh',
            code: '27253',
            parent_code: '772'
          }
        }
      },
      '773': {
        name: '4',
        type: 'quan',
        slug: '4',
        name_with_type: 'Quận 4',
        path: '4, Hồ Chí Minh',
        path_with_type: 'Quận 4, Thành phố Hồ Chí Minh',
        code: '773',
        parent_code: '79',
        children: {
          '27259': {
            name: '13',
            type: 'phuong',
            slug: '13',
            name_with_type: 'Phường 13',
            path: '13, 4, Hồ Chí Minh',
            path_with_type: 'Phường 13, Quận 4, Thành phố Hồ Chí Minh',
            code: '27259',
            parent_code: '773'
          },
          '27262': {
            name: '09',
            type: 'phuong',
            slug: '09',
            name_with_type: 'Phường 09',
            path: '09, 4, Hồ Chí Minh',
            path_with_type: 'Phường 09, Quận 4, Thành phố Hồ Chí Minh',
            code: '27262',
            parent_code: '773'
          },
          '27265': {
            name: '06',
            type: 'phuong',
            slug: '06',
            name_with_type: 'Phường 06',
            path: '06, 4, Hồ Chí Minh',
            path_with_type: 'Phường 06, Quận 4, Thành phố Hồ Chí Minh',
            code: '27265',
            parent_code: '773'
          },
          '27268': {
            name: '08',
            type: 'phuong',
            slug: '08',
            name_with_type: 'Phường 08',
            path: '08, 4, Hồ Chí Minh',
            path_with_type: 'Phường 08, Quận 4, Thành phố Hồ Chí Minh',
            code: '27268',
            parent_code: '773'
          },
          '27271': {
            name: '10',
            type: 'phuong',
            slug: '10',
            name_with_type: 'Phường 10',
            path: '10, 4, Hồ Chí Minh',
            path_with_type: 'Phường 10, Quận 4, Thành phố Hồ Chí Minh',
            code: '27271',
            parent_code: '773'
          },
          '27277': {
            name: '18',
            type: 'phuong',
            slug: '18',
            name_with_type: 'Phường 18',
            path: '18, 4, Hồ Chí Minh',
            path_with_type: 'Phường 18, Quận 4, Thành phố Hồ Chí Minh',
            code: '27277',
            parent_code: '773'
          },
          '27280': {
            name: '14',
            type: 'phuong',
            slug: '14',
            name_with_type: 'Phường 14',
            path: '14, 4, Hồ Chí Minh',
            path_with_type: 'Phường 14, Quận 4, Thành phố Hồ Chí Minh',
            code: '27280',
            parent_code: '773'
          },
          '27283': {
            name: '04',
            type: 'phuong',
            slug: '04',
            name_with_type: 'Phường 04',
            path: '04, 4, Hồ Chí Minh',
            path_with_type: 'Phường 04, Quận 4, Thành phố Hồ Chí Minh',
            code: '27283',
            parent_code: '773'
          },
          '27286': {
            name: '03',
            type: 'phuong',
            slug: '03',
            name_with_type: 'Phường 03',
            path: '03, 4, Hồ Chí Minh',
            path_with_type: 'Phường 03, Quận 4, Thành phố Hồ Chí Minh',
            code: '27286',
            parent_code: '773'
          },
          '27289': {
            name: '16',
            type: 'phuong',
            slug: '16',
            name_with_type: 'Phường 16',
            path: '16, 4, Hồ Chí Minh',
            path_with_type: 'Phường 16, Quận 4, Thành phố Hồ Chí Minh',
            code: '27289',
            parent_code: '773'
          },
          '27292': {
            name: '02',
            type: 'phuong',
            slug: '02',
            name_with_type: 'Phường 02',
            path: '02, 4, Hồ Chí Minh',
            path_with_type: 'Phường 02, Quận 4, Thành phố Hồ Chí Minh',
            code: '27292',
            parent_code: '773'
          },
          '27295': {
            name: '15',
            type: 'phuong',
            slug: '15',
            name_with_type: 'Phường 15',
            path: '15, 4, Hồ Chí Minh',
            path_with_type: 'Phường 15, Quận 4, Thành phố Hồ Chí Minh',
            code: '27295',
            parent_code: '773'
          },
          '27298': {
            name: '01',
            type: 'phuong',
            slug: '01',
            name_with_type: 'Phường 01',
            path: '01, 4, Hồ Chí Minh',
            path_with_type: 'Phường 01, Quận 4, Thành phố Hồ Chí Minh',
            code: '27298',
            parent_code: '773'
          }
        }
      },
      '774': {
        name: '5',
        type: 'quan',
        slug: '5',
        name_with_type: 'Quận 5',
        path: '5, Hồ Chí Minh',
        path_with_type: 'Quận 5, Thành phố Hồ Chí Minh',
        code: '774',
        parent_code: '79',
        children: {
          '27301': {
            name: '04',
            type: 'phuong',
            slug: '04',
            name_with_type: 'Phường 04',
            path: '04, 5, Hồ Chí Minh',
            path_with_type: 'Phường 04, Quận 5, Thành phố Hồ Chí Minh',
            code: '27301',
            parent_code: '774'
          },
          '27304': {
            name: '09',
            type: 'phuong',
            slug: '09',
            name_with_type: 'Phường 09',
            path: '09, 5, Hồ Chí Minh',
            path_with_type: 'Phường 09, Quận 5, Thành phố Hồ Chí Minh',
            code: '27304',
            parent_code: '774'
          },
          '27307': {
            name: '03',
            type: 'phuong',
            slug: '03',
            name_with_type: 'Phường 03',
            path: '03, 5, Hồ Chí Minh',
            path_with_type: 'Phường 03, Quận 5, Thành phố Hồ Chí Minh',
            code: '27307',
            parent_code: '774'
          },
          '27310': {
            name: '12',
            type: 'phuong',
            slug: '12',
            name_with_type: 'Phường 12',
            path: '12, 5, Hồ Chí Minh',
            path_with_type: 'Phường 12, Quận 5, Thành phố Hồ Chí Minh',
            code: '27310',
            parent_code: '774'
          },
          '27313': {
            name: '02',
            type: 'phuong',
            slug: '02',
            name_with_type: 'Phường 02',
            path: '02, 5, Hồ Chí Minh',
            path_with_type: 'Phường 02, Quận 5, Thành phố Hồ Chí Minh',
            code: '27313',
            parent_code: '774'
          },
          '27316': {
            name: '08',
            type: 'phuong',
            slug: '08',
            name_with_type: 'Phường 08',
            path: '08, 5, Hồ Chí Minh',
            path_with_type: 'Phường 08, Quận 5, Thành phố Hồ Chí Minh',
            code: '27316',
            parent_code: '774'
          },
          '27322': {
            name: '07',
            type: 'phuong',
            slug: '07',
            name_with_type: 'Phường 07',
            path: '07, 5, Hồ Chí Minh',
            path_with_type: 'Phường 07, Quận 5, Thành phố Hồ Chí Minh',
            code: '27322',
            parent_code: '774'
          },
          '27325': {
            name: '01',
            type: 'phuong',
            slug: '01',
            name_with_type: 'Phường 01',
            path: '01, 5, Hồ Chí Minh',
            path_with_type: 'Phường 01, Quận 5, Thành phố Hồ Chí Minh',
            code: '27325',
            parent_code: '774'
          },
          '27328': {
            name: '11',
            type: 'phuong',
            slug: '11',
            name_with_type: 'Phường 11',
            path: '11, 5, Hồ Chí Minh',
            path_with_type: 'Phường 11, Quận 5, Thành phố Hồ Chí Minh',
            code: '27328',
            parent_code: '774'
          },
          '27331': {
            name: '14',
            type: 'phuong',
            slug: '14',
            name_with_type: 'Phường 14',
            path: '14, 5, Hồ Chí Minh',
            path_with_type: 'Phường 14, Quận 5, Thành phố Hồ Chí Minh',
            code: '27331',
            parent_code: '774'
          },
          '27334': {
            name: '05',
            type: 'phuong',
            slug: '05',
            name_with_type: 'Phường 05',
            path: '05, 5, Hồ Chí Minh',
            path_with_type: 'Phường 05, Quận 5, Thành phố Hồ Chí Minh',
            code: '27334',
            parent_code: '774'
          },
          '27337': {
            name: '06',
            type: 'phuong',
            slug: '06',
            name_with_type: 'Phường 06',
            path: '06, 5, Hồ Chí Minh',
            path_with_type: 'Phường 06, Quận 5, Thành phố Hồ Chí Minh',
            code: '27337',
            parent_code: '774'
          },
          '27340': {
            name: '10',
            type: 'phuong',
            slug: '10',
            name_with_type: 'Phường 10',
            path: '10, 5, Hồ Chí Minh',
            path_with_type: 'Phường 10, Quận 5, Thành phố Hồ Chí Minh',
            code: '27340',
            parent_code: '774'
          },
          '27343': {
            name: '13',
            type: 'phuong',
            slug: '13',
            name_with_type: 'Phường 13',
            path: '13, 5, Hồ Chí Minh',
            path_with_type: 'Phường 13, Quận 5, Thành phố Hồ Chí Minh',
            code: '27343',
            parent_code: '774'
          }
        }
      },
      '775': {
        name: '6',
        type: 'quan',
        slug: '6',
        name_with_type: 'Quận 6',
        path: '6, Hồ Chí Minh',
        path_with_type: 'Quận 6, Thành phố Hồ Chí Minh',
        code: '775',
        parent_code: '79',
        children: {
          '27346': {
            name: '14',
            type: 'phuong',
            slug: '14',
            name_with_type: 'Phường 14',
            path: '14, 6, Hồ Chí Minh',
            path_with_type: 'Phường 14, Quận 6, Thành phố Hồ Chí Minh',
            code: '27346',
            parent_code: '775'
          },
          '27349': {
            name: '13',
            type: 'phuong',
            slug: '13',
            name_with_type: 'Phường 13',
            path: '13, 6, Hồ Chí Minh',
            path_with_type: 'Phường 13, Quận 6, Thành phố Hồ Chí Minh',
            code: '27349',
            parent_code: '775'
          },
          '27352': {
            name: '09',
            type: 'phuong',
            slug: '09',
            name_with_type: 'Phường 09',
            path: '09, 6, Hồ Chí Minh',
            path_with_type: 'Phường 09, Quận 6, Thành phố Hồ Chí Minh',
            code: '27352',
            parent_code: '775'
          },
          '27355': {
            name: '06',
            type: 'phuong',
            slug: '06',
            name_with_type: 'Phường 06',
            path: '06, 6, Hồ Chí Minh',
            path_with_type: 'Phường 06, Quận 6, Thành phố Hồ Chí Minh',
            code: '27355',
            parent_code: '775'
          },
          '27358': {
            name: '12',
            type: 'phuong',
            slug: '12',
            name_with_type: 'Phường 12',
            path: '12, 6, Hồ Chí Minh',
            path_with_type: 'Phường 12, Quận 6, Thành phố Hồ Chí Minh',
            code: '27358',
            parent_code: '775'
          },
          '27361': {
            name: '05',
            type: 'phuong',
            slug: '05',
            name_with_type: 'Phường 05',
            path: '05, 6, Hồ Chí Minh',
            path_with_type: 'Phường 05, Quận 6, Thành phố Hồ Chí Minh',
            code: '27361',
            parent_code: '775'
          },
          '27364': {
            name: '11',
            type: 'phuong',
            slug: '11',
            name_with_type: 'Phường 11',
            path: '11, 6, Hồ Chí Minh',
            path_with_type: 'Phường 11, Quận 6, Thành phố Hồ Chí Minh',
            code: '27364',
            parent_code: '775'
          },
          '27367': {
            name: '02',
            type: 'phuong',
            slug: '02',
            name_with_type: 'Phường 02',
            path: '02, 6, Hồ Chí Minh',
            path_with_type: 'Phường 02, Quận 6, Thành phố Hồ Chí Minh',
            code: '27367',
            parent_code: '775'
          },
          '27370': {
            name: '01',
            type: 'phuong',
            slug: '01',
            name_with_type: 'Phường 01',
            path: '01, 6, Hồ Chí Minh',
            path_with_type: 'Phường 01, Quận 6, Thành phố Hồ Chí Minh',
            code: '27370',
            parent_code: '775'
          },
          '27373': {
            name: '04',
            type: 'phuong',
            slug: '04',
            name_with_type: 'Phường 04',
            path: '04, 6, Hồ Chí Minh',
            path_with_type: 'Phường 04, Quận 6, Thành phố Hồ Chí Minh',
            code: '27373',
            parent_code: '775'
          },
          '27376': {
            name: '08',
            type: 'phuong',
            slug: '08',
            name_with_type: 'Phường 08',
            path: '08, 6, Hồ Chí Minh',
            path_with_type: 'Phường 08, Quận 6, Thành phố Hồ Chí Minh',
            code: '27376',
            parent_code: '775'
          },
          '27379': {
            name: '03',
            type: 'phuong',
            slug: '03',
            name_with_type: 'Phường 03',
            path: '03, 6, Hồ Chí Minh',
            path_with_type: 'Phường 03, Quận 6, Thành phố Hồ Chí Minh',
            code: '27379',
            parent_code: '775'
          },
          '27382': {
            name: '07',
            type: 'phuong',
            slug: '07',
            name_with_type: 'Phường 07',
            path: '07, 6, Hồ Chí Minh',
            path_with_type: 'Phường 07, Quận 6, Thành phố Hồ Chí Minh',
            code: '27382',
            parent_code: '775'
          },
          '27385': {
            name: '10',
            type: 'phuong',
            slug: '10',
            name_with_type: 'Phường 10',
            path: '10, 6, Hồ Chí Minh',
            path_with_type: 'Phường 10, Quận 6, Thành phố Hồ Chí Minh',
            code: '27385',
            parent_code: '775'
          }
        }
      },
      '776': {
        name: '8',
        type: 'quan',
        slug: '8',
        name_with_type: 'Quận 8',
        path: '8, Hồ Chí Minh',
        path_with_type: 'Quận 8, Thành phố Hồ Chí Minh',
        code: '776',
        parent_code: '79',
        children: {
          '27388': {
            name: '08',
            type: 'phuong',
            slug: '08',
            name_with_type: 'Phường 08',
            path: '08, 8, Hồ Chí Minh',
            path_with_type: 'Phường 08, Quận 8, Thành phố Hồ Chí Minh',
            code: '27388',
            parent_code: '776'
          },
          '27391': {
            name: '02',
            type: 'phuong',
            slug: '02',
            name_with_type: 'Phường 02',
            path: '02, 8, Hồ Chí Minh',
            path_with_type: 'Phường 02, Quận 8, Thành phố Hồ Chí Minh',
            code: '27391',
            parent_code: '776'
          },
          '27394': {
            name: '01',
            type: 'phuong',
            slug: '01',
            name_with_type: 'Phường 01',
            path: '01, 8, Hồ Chí Minh',
            path_with_type: 'Phường 01, Quận 8, Thành phố Hồ Chí Minh',
            code: '27394',
            parent_code: '776'
          },
          '27397': {
            name: '03',
            type: 'phuong',
            slug: '03',
            name_with_type: 'Phường 03',
            path: '03, 8, Hồ Chí Minh',
            path_with_type: 'Phường 03, Quận 8, Thành phố Hồ Chí Minh',
            code: '27397',
            parent_code: '776'
          },
          '27400': {
            name: '11',
            type: 'phuong',
            slug: '11',
            name_with_type: 'Phường 11',
            path: '11, 8, Hồ Chí Minh',
            path_with_type: 'Phường 11, Quận 8, Thành phố Hồ Chí Minh',
            code: '27400',
            parent_code: '776'
          },
          '27403': {
            name: '09',
            type: 'phuong',
            slug: '09',
            name_with_type: 'Phường 09',
            path: '09, 8, Hồ Chí Minh',
            path_with_type: 'Phường 09, Quận 8, Thành phố Hồ Chí Minh',
            code: '27403',
            parent_code: '776'
          },
          '27406': {
            name: '10',
            type: 'phuong',
            slug: '10',
            name_with_type: 'Phường 10',
            path: '10, 8, Hồ Chí Minh',
            path_with_type: 'Phường 10, Quận 8, Thành phố Hồ Chí Minh',
            code: '27406',
            parent_code: '776'
          },
          '27409': {
            name: '04',
            type: 'phuong',
            slug: '04',
            name_with_type: 'Phường 04',
            path: '04, 8, Hồ Chí Minh',
            path_with_type: 'Phường 04, Quận 8, Thành phố Hồ Chí Minh',
            code: '27409',
            parent_code: '776'
          },
          '27412': {
            name: '13',
            type: 'phuong',
            slug: '13',
            name_with_type: 'Phường 13',
            path: '13, 8, Hồ Chí Minh',
            path_with_type: 'Phường 13, Quận 8, Thành phố Hồ Chí Minh',
            code: '27412',
            parent_code: '776'
          },
          '27415': {
            name: '12',
            type: 'phuong',
            slug: '12',
            name_with_type: 'Phường 12',
            path: '12, 8, Hồ Chí Minh',
            path_with_type: 'Phường 12, Quận 8, Thành phố Hồ Chí Minh',
            code: '27415',
            parent_code: '776'
          },
          '27418': {
            name: '05',
            type: 'phuong',
            slug: '05',
            name_with_type: 'Phường 05',
            path: '05, 8, Hồ Chí Minh',
            path_with_type: 'Phường 05, Quận 8, Thành phố Hồ Chí Minh',
            code: '27418',
            parent_code: '776'
          },
          '27421': {
            name: '14',
            type: 'phuong',
            slug: '14',
            name_with_type: 'Phường 14',
            path: '14, 8, Hồ Chí Minh',
            path_with_type: 'Phường 14, Quận 8, Thành phố Hồ Chí Minh',
            code: '27421',
            parent_code: '776'
          },
          '27424': {
            name: '06',
            type: 'phuong',
            slug: '06',
            name_with_type: 'Phường 06',
            path: '06, 8, Hồ Chí Minh',
            path_with_type: 'Phường 06, Quận 8, Thành phố Hồ Chí Minh',
            code: '27424',
            parent_code: '776'
          },
          '27427': {
            name: '15',
            type: 'phuong',
            slug: '15',
            name_with_type: 'Phường 15',
            path: '15, 8, Hồ Chí Minh',
            path_with_type: 'Phường 15, Quận 8, Thành phố Hồ Chí Minh',
            code: '27427',
            parent_code: '776'
          },
          '27430': {
            name: '16',
            type: 'phuong',
            slug: '16',
            name_with_type: 'Phường 16',
            path: '16, 8, Hồ Chí Minh',
            path_with_type: 'Phường 16, Quận 8, Thành phố Hồ Chí Minh',
            code: '27430',
            parent_code: '776'
          },
          '27433': {
            name: '07',
            type: 'phuong',
            slug: '07',
            name_with_type: 'Phường 07',
            path: '07, 8, Hồ Chí Minh',
            path_with_type: 'Phường 07, Quận 8, Thành phố Hồ Chí Minh',
            code: '27433',
            parent_code: '776'
          }
        }
      },
      '777': {
        name: 'Bình Tân',
        type: 'quan',
        slug: 'binh-tan',
        name_with_type: 'Quận Bình Tân',
        path: 'Bình Tân, Hồ Chí Minh',
        path_with_type: 'Quận Bình Tân, Thành phố Hồ Chí Minh',
        code: '777',
        parent_code: '79',
        children: {
          '27436': {
            name: 'Bình Hưng Hòa',
            type: 'phuong',
            slug: 'binh-hung-hoa',
            name_with_type: 'Phường Bình Hưng Hòa',
            path: 'Bình Hưng Hòa, Bình Tân, Hồ Chí Minh',
            path_with_type: 'Phường Bình Hưng Hòa, Quận Bình Tân, Thành phố Hồ Chí Minh',
            code: '27436',
            parent_code: '777'
          },
          '27439': {
            name: 'Bình Hưng Hoà A',
            type: 'phuong',
            slug: 'binh-hung-hoa-a',
            name_with_type: 'Phường Bình Hưng Hoà A',
            path: 'Bình Hưng Hoà A, Bình Tân, Hồ Chí Minh',
            path_with_type: 'Phường Bình Hưng Hoà A, Quận Bình Tân, Thành phố Hồ Chí Minh',
            code: '27439',
            parent_code: '777'
          },
          '27442': {
            name: 'Bình Hưng Hoà B',
            type: 'phuong',
            slug: 'binh-hung-hoa-b',
            name_with_type: 'Phường Bình Hưng Hoà B',
            path: 'Bình Hưng Hoà B, Bình Tân, Hồ Chí Minh',
            path_with_type: 'Phường Bình Hưng Hoà B, Quận Bình Tân, Thành phố Hồ Chí Minh',
            code: '27442',
            parent_code: '777'
          },
          '27445': {
            name: 'Bình Trị Đông',
            type: 'phuong',
            slug: 'binh-tri-dong',
            name_with_type: 'Phường Bình Trị Đông',
            path: 'Bình Trị Đông, Bình Tân, Hồ Chí Minh',
            path_with_type: 'Phường Bình Trị Đông, Quận Bình Tân, Thành phố Hồ Chí Minh',
            code: '27445',
            parent_code: '777'
          },
          '27448': {
            name: 'Bình Trị Đông A',
            type: 'phuong',
            slug: 'binh-tri-dong-a',
            name_with_type: 'Phường Bình Trị Đông A',
            path: 'Bình Trị Đông A, Bình Tân, Hồ Chí Minh',
            path_with_type: 'Phường Bình Trị Đông A, Quận Bình Tân, Thành phố Hồ Chí Minh',
            code: '27448',
            parent_code: '777'
          },
          '27451': {
            name: 'Bình Trị Đông B',
            type: 'phuong',
            slug: 'binh-tri-dong-b',
            name_with_type: 'Phường Bình Trị Đông B',
            path: 'Bình Trị Đông B, Bình Tân, Hồ Chí Minh',
            path_with_type: 'Phường Bình Trị Đông B, Quận Bình Tân, Thành phố Hồ Chí Minh',
            code: '27451',
            parent_code: '777'
          },
          '27454': {
            name: 'Tân Tạo',
            type: 'phuong',
            slug: 'tan-tao',
            name_with_type: 'Phường Tân Tạo',
            path: 'Tân Tạo, Bình Tân, Hồ Chí Minh',
            path_with_type: 'Phường Tân Tạo, Quận Bình Tân, Thành phố Hồ Chí Minh',
            code: '27454',
            parent_code: '777'
          },
          '27457': {
            name: 'Tân Tạo A',
            type: 'phuong',
            slug: 'tan-tao-a',
            name_with_type: 'Phường Tân Tạo A',
            path: 'Tân Tạo A, Bình Tân, Hồ Chí Minh',
            path_with_type: 'Phường Tân Tạo A, Quận Bình Tân, Thành phố Hồ Chí Minh',
            code: '27457',
            parent_code: '777'
          },
          '27460': {
            name: 'An Lạc',
            type: 'phuong',
            slug: 'an-lac',
            name_with_type: 'Phường  An Lạc',
            path: 'An Lạc, Bình Tân, Hồ Chí Minh',
            path_with_type: 'Phường  An Lạc, Quận Bình Tân, Thành phố Hồ Chí Minh',
            code: '27460',
            parent_code: '777'
          },
          '27463': {
            name: 'An Lạc A',
            type: 'phuong',
            slug: 'an-lac-a',
            name_with_type: 'Phường An Lạc A',
            path: 'An Lạc A, Bình Tân, Hồ Chí Minh',
            path_with_type: 'Phường An Lạc A, Quận Bình Tân, Thành phố Hồ Chí Minh',
            code: '27463',
            parent_code: '777'
          }
        }
      },
      '778': {
        name: '7',
        type: 'quan',
        slug: '7',
        name_with_type: 'Quận 7',
        path: '7, Hồ Chí Minh',
        path_with_type: 'Quận 7, Thành phố Hồ Chí Minh',
        code: '778',
        parent_code: '79',
        children: {
          '27466': {
            name: 'Tân Thuận Đông',
            type: 'phuong',
            slug: 'tan-thuan-dong',
            name_with_type: 'Phường Tân Thuận Đông',
            path: 'Tân Thuận Đông, 7, Hồ Chí Minh',
            path_with_type: 'Phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh',
            code: '27466',
            parent_code: '778'
          },
          '27469': {
            name: 'Tân Thuận Tây',
            type: 'phuong',
            slug: 'tan-thuan-tay',
            name_with_type: 'Phường Tân Thuận Tây',
            path: 'Tân Thuận Tây, 7, Hồ Chí Minh',
            path_with_type: 'Phường Tân Thuận Tây, Quận 7, Thành phố Hồ Chí Minh',
            code: '27469',
            parent_code: '778'
          },
          '27472': {
            name: 'Tân Kiểng',
            type: 'phuong',
            slug: 'tan-kieng',
            name_with_type: 'Phường Tân Kiểng',
            path: 'Tân Kiểng, 7, Hồ Chí Minh',
            path_with_type: 'Phường Tân Kiểng, Quận 7, Thành phố Hồ Chí Minh',
            code: '27472',
            parent_code: '778'
          },
          '27475': {
            name: 'Tân Hưng',
            type: 'phuong',
            slug: 'tan-hung',
            name_with_type: 'Phường Tân Hưng',
            path: 'Tân Hưng, 7, Hồ Chí Minh',
            path_with_type: 'Phường Tân Hưng, Quận 7, Thành phố Hồ Chí Minh',
            code: '27475',
            parent_code: '778'
          },
          '27478': {
            name: 'Bình Thuận',
            type: 'phuong',
            slug: 'binh-thuan',
            name_with_type: 'Phường Bình Thuận',
            path: 'Bình Thuận, 7, Hồ Chí Minh',
            path_with_type: 'Phường Bình Thuận, Quận 7, Thành phố Hồ Chí Minh',
            code: '27478',
            parent_code: '778'
          },
          '27481': {
            name: 'Tân Quy',
            type: 'phuong',
            slug: 'tan-quy',
            name_with_type: 'Phường Tân Quy',
            path: 'Tân Quy, 7, Hồ Chí Minh',
            path_with_type: 'Phường Tân Quy, Quận 7, Thành phố Hồ Chí Minh',
            code: '27481',
            parent_code: '778'
          },
          '27484': {
            name: 'Phú Thuận',
            type: 'phuong',
            slug: 'phu-thuan',
            name_with_type: 'Phường Phú Thuận',
            path: 'Phú Thuận, 7, Hồ Chí Minh',
            path_with_type: 'Phường Phú Thuận, Quận 7, Thành phố Hồ Chí Minh',
            code: '27484',
            parent_code: '778'
          },
          '27487': {
            name: 'Tân Phú',
            type: 'phuong',
            slug: 'tan-phu',
            name_with_type: 'Phường Tân Phú',
            path: 'Tân Phú, 7, Hồ Chí Minh',
            path_with_type: 'Phường Tân Phú, Quận 7, Thành phố Hồ Chí Minh',
            code: '27487',
            parent_code: '778'
          },
          '27490': {
            name: 'Tân Phong',
            type: 'phuong',
            slug: 'tan-phong',
            name_with_type: 'Phường Tân Phong',
            path: 'Tân Phong, 7, Hồ Chí Minh',
            path_with_type: 'Phường Tân Phong, Quận 7, Thành phố Hồ Chí Minh',
            code: '27490',
            parent_code: '778'
          },
          '27493': {
            name: 'Phú Mỹ',
            type: 'phuong',
            slug: 'phu-my',
            name_with_type: 'Phường Phú Mỹ',
            path: 'Phú Mỹ, 7, Hồ Chí Minh',
            path_with_type: 'Phường Phú Mỹ, Quận 7, Thành phố Hồ Chí Minh',
            code: '27493',
            parent_code: '778'
          }
        }
      },
      '783': {
        name: 'Củ Chi',
        type: 'huyen',
        slug: 'cu-chi',
        name_with_type: 'Huyện Củ Chi',
        path: 'Củ Chi, Hồ Chí Minh',
        path_with_type: 'Huyện Củ Chi, Thành phố Hồ Chí Minh',
        code: '783',
        parent_code: '79',
        children: {
          '27496': {
            name: 'Củ Chi',
            type: 'thi-tran',
            slug: 'cu-chi',
            name_with_type: 'Thị trấn Củ Chi',
            path: 'Củ Chi, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Thị trấn Củ Chi, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27496',
            parent_code: '783'
          },
          '27499': {
            name: 'Phú Mỹ Hưng',
            type: 'xa',
            slug: 'phu-my-hung',
            name_with_type: 'Xã Phú Mỹ Hưng',
            path: 'Phú Mỹ Hưng, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã Phú Mỹ Hưng, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27499',
            parent_code: '783'
          },
          '27502': {
            name: 'An Phú',
            type: 'xa',
            slug: 'an-phu',
            name_with_type: 'Xã An Phú',
            path: 'An Phú, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã An Phú, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27502',
            parent_code: '783'
          },
          '27505': {
            name: 'Trung Lập Thượng',
            type: 'xa',
            slug: 'trung-lap-thuong',
            name_with_type: 'Xã Trung Lập Thượng',
            path: 'Trung Lập Thượng, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã Trung Lập Thượng, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27505',
            parent_code: '783'
          },
          '27508': {
            name: 'An Nhơn Tây',
            type: 'xa',
            slug: 'an-nhon-tay',
            name_with_type: 'Xã An Nhơn Tây',
            path: 'An Nhơn Tây, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã An Nhơn Tây, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27508',
            parent_code: '783'
          },
          '27511': {
            name: 'Nhuận Đức',
            type: 'xa',
            slug: 'nhuan-duc',
            name_with_type: 'Xã Nhuận Đức',
            path: 'Nhuận Đức, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã Nhuận Đức, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27511',
            parent_code: '783'
          },
          '27514': {
            name: 'Phạm Văn Cội',
            type: 'xa',
            slug: 'pham-van-coi',
            name_with_type: 'Xã Phạm Văn Cội',
            path: 'Phạm Văn Cội, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã Phạm Văn Cội, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27514',
            parent_code: '783'
          },
          '27517': {
            name: 'Phú Hòa Đông',
            type: 'xa',
            slug: 'phu-hoa-dong',
            name_with_type: 'Xã Phú Hòa Đông',
            path: 'Phú Hòa Đông, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã Phú Hòa Đông, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27517',
            parent_code: '783'
          },
          '27520': {
            name: 'Trung Lập Hạ',
            type: 'xa',
            slug: 'trung-lap-ha',
            name_with_type: 'Xã Trung Lập Hạ',
            path: 'Trung Lập Hạ, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã Trung Lập Hạ, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27520',
            parent_code: '783'
          },
          '27523': {
            name: 'Trung An',
            type: 'xa',
            slug: 'trung-an',
            name_with_type: 'Xã Trung An',
            path: 'Trung An, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã Trung An, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27523',
            parent_code: '783'
          },
          '27526': {
            name: 'Phước Thạnh',
            type: 'xa',
            slug: 'phuoc-thanh',
            name_with_type: 'Xã Phước Thạnh',
            path: 'Phước Thạnh, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã Phước Thạnh, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27526',
            parent_code: '783'
          },
          '27529': {
            name: 'Phước Hiệp',
            type: 'xa',
            slug: 'phuoc-hiep',
            name_with_type: 'Xã Phước Hiệp',
            path: 'Phước Hiệp, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã Phước Hiệp, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27529',
            parent_code: '783'
          },
          '27532': {
            name: 'Tân An Hội',
            type: 'xa',
            slug: 'tan-an-hoi',
            name_with_type: 'Xã Tân An Hội',
            path: 'Tân An Hội, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã Tân An Hội, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27532',
            parent_code: '783'
          },
          '27535': {
            name: 'Phước Vĩnh An',
            type: 'xa',
            slug: 'phuoc-vinh-an',
            name_with_type: 'Xã Phước Vĩnh An',
            path: 'Phước Vĩnh An, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã Phước Vĩnh An, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27535',
            parent_code: '783'
          },
          '27538': {
            name: 'Thái Mỹ',
            type: 'xa',
            slug: 'thai-my',
            name_with_type: 'Xã Thái Mỹ',
            path: 'Thái Mỹ, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã Thái Mỹ, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27538',
            parent_code: '783'
          },
          '27541': {
            name: 'Tân Thạnh Tây',
            type: 'xa',
            slug: 'tan-thanh-tay',
            name_with_type: 'Xã Tân Thạnh Tây',
            path: 'Tân Thạnh Tây, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã Tân Thạnh Tây, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27541',
            parent_code: '783'
          },
          '27544': {
            name: 'Hòa Phú',
            type: 'xa',
            slug: 'hoa-phu',
            name_with_type: 'Xã Hòa Phú',
            path: 'Hòa Phú, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã Hòa Phú, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27544',
            parent_code: '783'
          },
          '27547': {
            name: 'Tân Thạnh Đông',
            type: 'xa',
            slug: 'tan-thanh-dong',
            name_with_type: 'Xã Tân Thạnh Đông',
            path: 'Tân Thạnh Đông, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã Tân Thạnh Đông, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27547',
            parent_code: '783'
          },
          '27550': {
            name: 'Bình Mỹ',
            type: 'xa',
            slug: 'binh-my',
            name_with_type: 'Xã Bình Mỹ',
            path: 'Bình Mỹ, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã Bình Mỹ, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27550',
            parent_code: '783'
          },
          '27553': {
            name: 'Tân Phú Trung',
            type: 'xa',
            slug: 'tan-phu-trung',
            name_with_type: 'Xã Tân Phú Trung',
            path: 'Tân Phú Trung, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã Tân Phú Trung, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27553',
            parent_code: '783'
          },
          '27556': {
            name: 'Tân Thông Hội',
            type: 'xa',
            slug: 'tan-thong-hoi',
            name_with_type: 'Xã Tân Thông Hội',
            path: 'Tân Thông Hội, Củ Chi, Hồ Chí Minh',
            path_with_type: 'Xã Tân Thông Hội, Huyện Củ Chi, Thành phố Hồ Chí Minh',
            code: '27556',
            parent_code: '783'
          }
        }
      },
      '784': {
        name: 'Hóc Môn',
        type: 'huyen',
        slug: 'hoc-mon',
        name_with_type: 'Huyện Hóc Môn',
        path: 'Hóc Môn, Hồ Chí Minh',
        path_with_type: 'Huyện Hóc Môn, Thành phố Hồ Chí Minh',
        code: '784',
        parent_code: '79',
        children: {
          '27559': {
            name: 'Hóc Môn',
            type: 'thi-tran',
            slug: 'hoc-mon',
            name_with_type: 'Thị trấn Hóc Môn',
            path: 'Hóc Môn, Hóc Môn, Hồ Chí Minh',
            path_with_type: 'Thị trấn Hóc Môn, Huyện Hóc Môn, Thành phố Hồ Chí Minh',
            code: '27559',
            parent_code: '784'
          },
          '27562': {
            name: 'Tân Hiệp',
            type: 'xa',
            slug: 'tan-hiep',
            name_with_type: 'Xã Tân Hiệp',
            path: 'Tân Hiệp, Hóc Môn, Hồ Chí Minh',
            path_with_type: 'Xã Tân Hiệp, Huyện Hóc Môn, Thành phố Hồ Chí Minh',
            code: '27562',
            parent_code: '784'
          },
          '27565': {
            name: 'Nhị Bình',
            type: 'xa',
            slug: 'nhi-binh',
            name_with_type: 'Xã Nhị Bình',
            path: 'Nhị Bình, Hóc Môn, Hồ Chí Minh',
            path_with_type: 'Xã Nhị Bình, Huyện Hóc Môn, Thành phố Hồ Chí Minh',
            code: '27565',
            parent_code: '784'
          },
          '27568': {
            name: 'Đông Thạnh',
            type: 'xa',
            slug: 'dong-thanh',
            name_with_type: 'Xã Đông Thạnh',
            path: 'Đông Thạnh, Hóc Môn, Hồ Chí Minh',
            path_with_type: 'Xã Đông Thạnh, Huyện Hóc Môn, Thành phố Hồ Chí Minh',
            code: '27568',
            parent_code: '784'
          },
          '27571': {
            name: 'Tân Thới Nhì',
            type: 'xa',
            slug: 'tan-thoi-nhi',
            name_with_type: 'Xã Tân Thới Nhì',
            path: 'Tân Thới Nhì, Hóc Môn, Hồ Chí Minh',
            path_with_type: 'Xã Tân Thới Nhì, Huyện Hóc Môn, Thành phố Hồ Chí Minh',
            code: '27571',
            parent_code: '784'
          },
          '27574': {
            name: 'Thới Tam Thôn',
            type: 'xa',
            slug: 'thoi-tam-thon',
            name_with_type: 'Xã Thới Tam Thôn',
            path: 'Thới Tam Thôn, Hóc Môn, Hồ Chí Minh',
            path_with_type: 'Xã Thới Tam Thôn, Huyện Hóc Môn, Thành phố Hồ Chí Minh',
            code: '27574',
            parent_code: '784'
          },
          '27577': {
            name: 'Xuân Thới Sơn',
            type: 'xa',
            slug: 'xuan-thoi-son',
            name_with_type: 'Xã Xuân Thới Sơn',
            path: 'Xuân Thới Sơn, Hóc Môn, Hồ Chí Minh',
            path_with_type: 'Xã Xuân Thới Sơn, Huyện Hóc Môn, Thành phố Hồ Chí Minh',
            code: '27577',
            parent_code: '784'
          },
          '27580': {
            name: 'Tân Xuân',
            type: 'xa',
            slug: 'tan-xuan',
            name_with_type: 'Xã Tân Xuân',
            path: 'Tân Xuân, Hóc Môn, Hồ Chí Minh',
            path_with_type: 'Xã Tân Xuân, Huyện Hóc Môn, Thành phố Hồ Chí Minh',
            code: '27580',
            parent_code: '784'
          },
          '27583': {
            name: 'Xuân Thới Đông',
            type: 'xa',
            slug: 'xuan-thoi-dong',
            name_with_type: 'Xã Xuân Thới Đông',
            path: 'Xuân Thới Đông, Hóc Môn, Hồ Chí Minh',
            path_with_type: 'Xã Xuân Thới Đông, Huyện Hóc Môn, Thành phố Hồ Chí Minh',
            code: '27583',
            parent_code: '784'
          },
          '27586': {
            name: 'Trung Chánh',
            type: 'xa',
            slug: 'trung-chanh',
            name_with_type: 'Xã Trung Chánh',
            path: 'Trung Chánh, Hóc Môn, Hồ Chí Minh',
            path_with_type: 'Xã Trung Chánh, Huyện Hóc Môn, Thành phố Hồ Chí Minh',
            code: '27586',
            parent_code: '784'
          },
          '27589': {
            name: 'Xuân Thới Thượng',
            type: 'xa',
            slug: 'xuan-thoi-thuong',
            name_with_type: 'Xã Xuân Thới Thượng',
            path: 'Xuân Thới Thượng, Hóc Môn, Hồ Chí Minh',
            path_with_type: 'Xã Xuân Thới Thượng, Huyện Hóc Môn, Thành phố Hồ Chí Minh',
            code: '27589',
            parent_code: '784'
          },
          '27592': {
            name: 'Bà Điểm',
            type: 'xa',
            slug: 'ba-diem',
            name_with_type: 'Xã Bà Điểm',
            path: 'Bà Điểm, Hóc Môn, Hồ Chí Minh',
            path_with_type: 'Xã Bà Điểm, Huyện Hóc Môn, Thành phố Hồ Chí Minh',
            code: '27592',
            parent_code: '784'
          }
        }
      },
      '785': {
        name: 'Bình Chánh',
        type: 'huyen',
        slug: 'binh-chanh',
        name_with_type: 'Huyện Bình Chánh',
        path: 'Bình Chánh, Hồ Chí Minh',
        path_with_type: 'Huyện Bình Chánh, Thành phố Hồ Chí Minh',
        code: '785',
        parent_code: '79',
        children: {
          '27595': {
            name: 'Tân Túc',
            type: 'thi-tran',
            slug: 'tan-tuc',
            name_with_type: 'Thị trấn Tân Túc',
            path: 'Tân Túc, Bình Chánh, Hồ Chí Minh',
            path_with_type: 'Thị trấn Tân Túc, Huyện Bình Chánh, Thành phố Hồ Chí Minh',
            code: '27595',
            parent_code: '785'
          },
          '27598': {
            name: 'Phạm Văn Hai',
            type: 'xa',
            slug: 'pham-van-hai',
            name_with_type: 'Xã Phạm Văn Hai',
            path: 'Phạm Văn Hai, Bình Chánh, Hồ Chí Minh',
            path_with_type: 'Xã Phạm Văn Hai, Huyện Bình Chánh, Thành phố Hồ Chí Minh',
            code: '27598',
            parent_code: '785'
          },
          '27601': {
            name: 'Vĩnh Lộc A',
            type: 'xa',
            slug: 'vinh-loc-a',
            name_with_type: 'Xã Vĩnh Lộc A',
            path: 'Vĩnh Lộc A, Bình Chánh, Hồ Chí Minh',
            path_with_type: 'Xã Vĩnh Lộc A, Huyện Bình Chánh, Thành phố Hồ Chí Minh',
            code: '27601',
            parent_code: '785'
          },
          '27604': {
            name: 'Vĩnh Lộc B',
            type: 'xa',
            slug: 'vinh-loc-b',
            name_with_type: 'Xã Vĩnh Lộc B',
            path: 'Vĩnh Lộc B, Bình Chánh, Hồ Chí Minh',
            path_with_type: 'Xã Vĩnh Lộc B, Huyện Bình Chánh, Thành phố Hồ Chí Minh',
            code: '27604',
            parent_code: '785'
          },
          '27607': {
            name: 'Bình Lợi',
            type: 'xa',
            slug: 'binh-loi',
            name_with_type: 'Xã Bình Lợi',
            path: 'Bình Lợi, Bình Chánh, Hồ Chí Minh',
            path_with_type: 'Xã Bình Lợi, Huyện Bình Chánh, Thành phố Hồ Chí Minh',
            code: '27607',
            parent_code: '785'
          },
          '27610': {
            name: 'Lê Minh Xuân',
            type: 'xa',
            slug: 'le-minh-xuan',
            name_with_type: 'Xã Lê Minh Xuân',
            path: 'Lê Minh Xuân, Bình Chánh, Hồ Chí Minh',
            path_with_type: 'Xã Lê Minh Xuân, Huyện Bình Chánh, Thành phố Hồ Chí Minh',
            code: '27610',
            parent_code: '785'
          },
          '27613': {
            name: 'Tân Nhựt',
            type: 'xa',
            slug: 'tan-nhut',
            name_with_type: 'Xã Tân Nhựt',
            path: 'Tân Nhựt, Bình Chánh, Hồ Chí Minh',
            path_with_type: 'Xã Tân Nhựt, Huyện Bình Chánh, Thành phố Hồ Chí Minh',
            code: '27613',
            parent_code: '785'
          },
          '27616': {
            name: 'Tân Kiên',
            type: 'xa',
            slug: 'tan-kien',
            name_with_type: 'Xã Tân Kiên',
            path: 'Tân Kiên, Bình Chánh, Hồ Chí Minh',
            path_with_type: 'Xã Tân Kiên, Huyện Bình Chánh, Thành phố Hồ Chí Minh',
            code: '27616',
            parent_code: '785'
          },
          '27619': {
            name: 'Bình Hưng',
            type: 'xa',
            slug: 'binh-hung',
            name_with_type: 'Xã Bình Hưng',
            path: 'Bình Hưng, Bình Chánh, Hồ Chí Minh',
            path_with_type: 'Xã Bình Hưng, Huyện Bình Chánh, Thành phố Hồ Chí Minh',
            code: '27619',
            parent_code: '785'
          },
          '27622': {
            name: 'Phong Phú',
            type: 'xa',
            slug: 'phong-phu',
            name_with_type: 'Xã Phong Phú',
            path: 'Phong Phú, Bình Chánh, Hồ Chí Minh',
            path_with_type: 'Xã Phong Phú, Huyện Bình Chánh, Thành phố Hồ Chí Minh',
            code: '27622',
            parent_code: '785'
          },
          '27625': {
            name: 'An Phú Tây',
            type: 'xa',
            slug: 'an-phu-tay',
            name_with_type: 'Xã An Phú Tây',
            path: 'An Phú Tây, Bình Chánh, Hồ Chí Minh',
            path_with_type: 'Xã An Phú Tây, Huyện Bình Chánh, Thành phố Hồ Chí Minh',
            code: '27625',
            parent_code: '785'
          },
          '27628': {
            name: 'Hưng Long',
            type: 'xa',
            slug: 'hung-long',
            name_with_type: 'Xã Hưng Long',
            path: 'Hưng Long, Bình Chánh, Hồ Chí Minh',
            path_with_type: 'Xã Hưng Long, Huyện Bình Chánh, Thành phố Hồ Chí Minh',
            code: '27628',
            parent_code: '785'
          },
          '27631': {
            name: 'Đa Phước',
            type: 'xa',
            slug: 'da-phuoc',
            name_with_type: 'Xã Đa Phước',
            path: 'Đa Phước, Bình Chánh, Hồ Chí Minh',
            path_with_type: 'Xã Đa Phước, Huyện Bình Chánh, Thành phố Hồ Chí Minh',
            code: '27631',
            parent_code: '785'
          },
          '27634': {
            name: 'Tân Quý Tây',
            type: 'xa',
            slug: 'tan-quy-tay',
            name_with_type: 'Xã Tân Quý Tây',
            path: 'Tân Quý Tây, Bình Chánh, Hồ Chí Minh',
            path_with_type: 'Xã Tân Quý Tây, Huyện Bình Chánh, Thành phố Hồ Chí Minh',
            code: '27634',
            parent_code: '785'
          },
          '27637': {
            name: 'Bình Chánh',
            type: 'xa',
            slug: 'binh-chanh',
            name_with_type: 'Xã Bình Chánh',
            path: 'Bình Chánh, Bình Chánh, Hồ Chí Minh',
            path_with_type: 'Xã Bình Chánh, Huyện Bình Chánh, Thành phố Hồ Chí Minh',
            code: '27637',
            parent_code: '785'
          },
          '27640': {
            name: 'Quy Đức',
            type: 'xa',
            slug: 'quy-duc',
            name_with_type: 'Xã Quy Đức',
            path: 'Quy Đức, Bình Chánh, Hồ Chí Minh',
            path_with_type: 'Xã Quy Đức, Huyện Bình Chánh, Thành phố Hồ Chí Minh',
            code: '27640',
            parent_code: '785'
          }
        }
      },
      '786': {
        name: 'Nhà Bè',
        type: 'huyen',
        slug: 'nha-be',
        name_with_type: 'Huyện Nhà Bè',
        path: 'Nhà Bè, Hồ Chí Minh',
        path_with_type: 'Huyện Nhà Bè, Thành phố Hồ Chí Minh',
        code: '786',
        parent_code: '79',
        children: {
          '27643': {
            name: 'Nhà Bè',
            type: 'thi-tran',
            slug: 'nha-be',
            name_with_type: 'Thị trấn Nhà Bè',
            path: 'Nhà Bè, Nhà Bè, Hồ Chí Minh',
            path_with_type: 'Thị trấn Nhà Bè, Huyện Nhà Bè, Thành phố Hồ Chí Minh',
            code: '27643',
            parent_code: '786'
          },
          '27646': {
            name: 'Phước Kiển',
            type: 'xa',
            slug: 'phuoc-kien',
            name_with_type: 'Xã Phước Kiển',
            path: 'Phước Kiển, Nhà Bè, Hồ Chí Minh',
            path_with_type: 'Xã Phước Kiển, Huyện Nhà Bè, Thành phố Hồ Chí Minh',
            code: '27646',
            parent_code: '786'
          },
          '27649': {
            name: 'Phước Lộc',
            type: 'xa',
            slug: 'phuoc-loc',
            name_with_type: 'Xã Phước Lộc',
            path: 'Phước Lộc, Nhà Bè, Hồ Chí Minh',
            path_with_type: 'Xã Phước Lộc, Huyện Nhà Bè, Thành phố Hồ Chí Minh',
            code: '27649',
            parent_code: '786'
          },
          '27652': {
            name: 'Nhơn Đức',
            type: 'xa',
            slug: 'nhon-duc',
            name_with_type: 'Xã Nhơn Đức',
            path: 'Nhơn Đức, Nhà Bè, Hồ Chí Minh',
            path_with_type: 'Xã Nhơn Đức, Huyện Nhà Bè, Thành phố Hồ Chí Minh',
            code: '27652',
            parent_code: '786'
          },
          '27655': {
            name: 'Phú Xuân',
            type: 'xa',
            slug: 'phu-xuan',
            name_with_type: 'Xã Phú Xuân',
            path: 'Phú Xuân, Nhà Bè, Hồ Chí Minh',
            path_with_type: 'Xã Phú Xuân, Huyện Nhà Bè, Thành phố Hồ Chí Minh',
            code: '27655',
            parent_code: '786'
          },
          '27658': {
            name: 'Long Thới',
            type: 'xa',
            slug: 'long-thoi',
            name_with_type: 'Xã Long Thới',
            path: 'Long Thới, Nhà Bè, Hồ Chí Minh',
            path_with_type: 'Xã Long Thới, Huyện Nhà Bè, Thành phố Hồ Chí Minh',
            code: '27658',
            parent_code: '786'
          },
          '27661': {
            name: 'Hiệp Phước',
            type: 'xa',
            slug: 'hiep-phuoc',
            name_with_type: 'Xã Hiệp Phước',
            path: 'Hiệp Phước, Nhà Bè, Hồ Chí Minh',
            path_with_type: 'Xã Hiệp Phước, Huyện Nhà Bè, Thành phố Hồ Chí Minh',
            code: '27661',
            parent_code: '786'
          }
        }
      },
      '787': {
        name: 'Cần Giờ',
        type: 'huyen',
        slug: 'can-gio',
        name_with_type: 'Huyện Cần Giờ',
        path: 'Cần Giờ, Hồ Chí Minh',
        path_with_type: 'Huyện Cần Giờ, Thành phố Hồ Chí Minh',
        code: '787',
        parent_code: '79',
        children: {
          '27664': {
            name: 'Cần Thạnh',
            type: 'thi-tran',
            slug: 'can-thanh',
            name_with_type: 'Thị trấn Cần Thạnh',
            path: 'Cần Thạnh, Cần Giờ, Hồ Chí Minh',
            path_with_type: 'Thị trấn Cần Thạnh, Huyện Cần Giờ, Thành phố Hồ Chí Minh',
            code: '27664',
            parent_code: '787'
          },
          '27667': {
            name: 'Bình Khánh',
            type: 'xa',
            slug: 'binh-khanh',
            name_with_type: 'Xã Bình Khánh',
            path: 'Bình Khánh, Cần Giờ, Hồ Chí Minh',
            path_with_type: 'Xã Bình Khánh, Huyện Cần Giờ, Thành phố Hồ Chí Minh',
            code: '27667',
            parent_code: '787'
          },
          '27670': {
            name: 'Tam Thôn Hiệp',
            type: 'xa',
            slug: 'tam-thon-hiep',
            name_with_type: 'Xã Tam Thôn Hiệp',
            path: 'Tam Thôn Hiệp, Cần Giờ, Hồ Chí Minh',
            path_with_type: 'Xã Tam Thôn Hiệp, Huyện Cần Giờ, Thành phố Hồ Chí Minh',
            code: '27670',
            parent_code: '787'
          },
          '27673': {
            name: 'An Thới Đông',
            type: 'xa',
            slug: 'an-thoi-dong',
            name_with_type: 'Xã An Thới Đông',
            path: 'An Thới Đông, Cần Giờ, Hồ Chí Minh',
            path_with_type: 'Xã An Thới Đông, Huyện Cần Giờ, Thành phố Hồ Chí Minh',
            code: '27673',
            parent_code: '787'
          },
          '27676': {
            name: 'Thạnh An',
            type: 'xa',
            slug: 'thanh-an',
            name_with_type: 'Xã Thạnh An',
            path: 'Thạnh An, Cần Giờ, Hồ Chí Minh',
            path_with_type: 'Xã Thạnh An, Huyện Cần Giờ, Thành phố Hồ Chí Minh',
            code: '27676',
            parent_code: '787'
          },
          '27679': {
            name: 'Long Hòa',
            type: 'xa',
            slug: 'long-hoa',
            name_with_type: 'Xã Long Hòa',
            path: 'Long Hòa, Cần Giờ, Hồ Chí Minh',
            path_with_type: 'Xã Long Hòa, Huyện Cần Giờ, Thành phố Hồ Chí Minh',
            code: '27679',
            parent_code: '787'
          },
          '27682': {
            name: 'Lý Nhơn',
            type: 'xa',
            slug: 'ly-nhon',
            name_with_type: 'Xã Lý Nhơn',
            path: 'Lý Nhơn, Cần Giờ, Hồ Chí Minh',
            path_with_type: 'Xã Lý Nhơn, Huyện Cần Giờ, Thành phố Hồ Chí Minh',
            code: '27682',
            parent_code: '787'
          }
        }
      }
    }
  }
};
