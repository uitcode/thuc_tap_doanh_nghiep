// export interface IProject

import { IProject } from '../../project.repository';

export const projects: IProject[] = [
  {
    _id: uuidv4(),
    index: 5,
    name: 'Căn hộ Vinhomes Grand Park',
    supplier: ['Tập đoàn Vingroup', 'Công ty Cổ phần Quốc Lộc Phát'],
    status: 1,
    created_at: randomDate()
  },
  {
    _id: uuidv4(),
    index: 9,
    name: 'Căn hộ The Opera Residence Quận 2',
    supplier: ['Tập đoàn Vạn Phúc'],
    status: 0,
    created_at: randomDate()
  },
  {
    _id: uuidv4(),
    index: 14,
    name: 'Căn hộ studio Diyas Sky Tân Bình',
    supplier: ['Tập đoàn C.T Group Việt Nam'],
    status: 0,
    created_at: randomDate()
  },
  {
    _id: uuidv4(),
    index: 16,
    name: 'Nhà phố Lovera Premier - Lovera Park Bình Chánh',
    supplier: [
      'Công ty TNHH TTL Tây Sài Gòn',
      'Công ty Cổ phần Địa ốc Cavaland',
      'Công ty Cổ Phần Đầu Tư Bất Động Sản Rio Land',
      'Công ty Cổ phần Vinhomes'
    ],
    status: 1,
    created_at: randomDate()
  },
  {
    _id: uuidv4(),
    index: 17,
    name: 'Khu đô thị Saigon Peninsula Quận 7',
    supplier: ['Công ty Cổ phần Tập đoàn Sài Gòn Peninsula'],
    status: 1,
    created_at: randomDate()
  },
  {
    _id: uuidv4(),
    index: 19,
    name: 'Căn hộ Luxcity Officetel Quận 7',
    supplier: ['Công ty Cổ phần Tập đoàn Đất Xanh'],
    status: 1,
    created_at: randomDate()
  },
  {
    _id: uuidv4(),
    index: 20,
    name: 'Tổ hợp căn hộ, biệt thự Charmington Golf & Life Bình Chánh',
    supplier: [
      'Công ty Cổ phần Bất động sản E Xim (EXimland)',
      'Công ty Cổ phần Đầu tư Địa ốc Nova (Novaland)'
    ],
    status: 1,
    created_at: randomDate()
  },
  {
    _id: uuidv4(),
    index: 24,
    name: 'Nhà ở xã hội River Park Tower Quận 9',
    supplier: ['Công Ty Cổ Phần Đầu Tư Bất Động Sản Việt Nam'],
    status: 1,
    created_at: randomDate()
  },
  {
    _id: uuidv4(),
    index: 24,
    name: 'Biệt thự Valora Fuji Quận 9',
    supplier: ['Công ty Cổ phần Đầu tư Nam Long'],
    status: 0,
    created_at: randomDate()
  },
  {
    _id: uuidv4(),
    index: 24,
    name: 'Phố thương mại Royal Vạn Phúc – Vạn Phúc City Thủ Đức',
    supplier: ['Tập đoàn Vạn Phúc'],
    status: 1,
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
