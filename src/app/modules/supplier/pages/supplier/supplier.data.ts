// export interface IProject

import { ISupplier } from '../../supplier.repository';

export const suppliers: ISupplier[] = [
  {
    id: uuidv4(),
    name: 'Xây Dựng Sông Ba - Công Ty TNHH Tư Vấn Đầu Tư Xây Dựng Sông Ba',
    sub_name: 'xd-sb',
    project_total: 5,
    phone: '0983780998',
    email: 'xd.songba@gmail.com',
    tax_number: '4903850-3943',
    status: 1,
    updated_at: randomDate(),
    created_at: randomDate()
  },
  {
    id: uuidv4(),
    name: 'Xây Dựng Seacons - Công Ty TNHH Đầu Tư Xây Dựng Seacons',
    sub_name: 'xd-sea',
    project_total: 2,
    phone: '0983780998',
    email: 'xd.seacons@gmail.com',
    tax_number: '3930-0303324',
    status: 0,
    updated_at: randomDate(),
    created_at: randomDate()
  },
  {
    id: uuidv4(),
    name: 'Xây Dựng DNC - Công Ty TNHH Thiết Kế Và Xây Dựng DNC',
    sub_name: 'xd-dnc',
    project_total: 0,
    phone: '0329898092',
    email: 'xd.dnc@gmail.com',
    tax_number: '903944-38938',
    status: 2,
    updated_at: randomDate(),
    created_at: randomDate()
  },
  {
    id: uuidv4(),
    name: 'Xây Dựng Phát An - Công Ty TNHH Xây Dựng Phát An',
    sub_name: 'xd-pa',
    project_total: 7,
    phone: '0983729873',
    email: 'xd.phatan@gmail.com',
    tax_number: '40394-4374333',
    status: 1,
    updated_at: randomDate(),
    created_at: randomDate()
  },
  {
    id: uuidv4(),
    name: 'Xây Dựng Phú Long - Công Ty TNHH Xây Dựng Và Trang Trí Nội Thất Phú Long',
    sub_name: 'xd-pa',
    project_total: 7,
    phone: '0983729873',
    email: 'xd.phatan@gmail.com',
    tax_number: '40394-4374333',
    status: 1,
    updated_at: randomDate(),
    created_at: randomDate()
  },
  {
    id: uuidv4(),
    name: 'Xây Dựng Tân Thanh - Công Ty TNHH Thiết Kế Xây Dựng Tân Thanh',
    sub_name: 'xd-tt',
    project_total: 12,
    phone: '0228398928',
    email: 'xd.tanthanh@gmail.com',
    tax_number: '2992742-0282',
    status: 1,
    updated_at: randomDate(),
    created_at: randomDate()
  },
  {
    id: uuidv4(),
    name: 'Phuc Khang Group - Công Ty CP Phát Triển Phúc Khang',
    sub_name: 'pk-group',
    project_total: 3,
    phone: '0393049049',
    email: 'phuckhang.group@gmail.com',
    tax_number: '827492-0482848',
    status: 0,
    updated_at: randomDate(),
    created_at: randomDate()
  },
  {
    id: uuidv4(),
    name: 'Xây Dựng Nhật Lam - Công Ty TNHH MTV Thiết Kế Xây Dựng Nhật Lam',
    sub_name: 'xd-nl',
    project_total: 24,
    phone: '0938948484',
    email: 'xd.nhatlam@gmail.com',
    tax_number: '42474094-2490',
    status: 1,
    updated_at: randomDate(),
    created_at: randomDate()
  },
  {
    id: uuidv4(),
    name: 'Xây Dựng Huỳnh Trân - Công Ty TNHH Xây Dựng Thương Mại Dịch Vụ Huỳnh Trân',
    sub_name: 'xd-ht',
    project_total: 0,
    phone: '0948489982',
    email: 'xd.huynhtran@gmail.com',
    tax_number: '794249-4929',
    status: 2,
    updated_at: randomDate(),
    created_at: randomDate()
  },
  {
    id: uuidv4(),
    name: 'Xây Dựng Minh Phương Tiến - Công Ty TNHH Xây Dựng Thương Mại Minh Phương Tiến',
    sub_name: 'xd-mpt',
    project_total: 17,
    phone: '0787838837',
    email: 'xd.mptien@gmail.com',
    tax_number: '42942094-4384',
    status: 1,
    updated_at: randomDate(),
    created_at: randomDate()
  }
];

function randomDate() {
  let start = new Date();
  let end = new Date(2021, 11, 31);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
