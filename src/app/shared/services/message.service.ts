import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

interface IErrorList {
  errors: IError[];
  field: string;
}

interface IError {
  code: number;
  key: string;
}
@Injectable()
export class MessageService {
  listErrorText: any = {
    // login: {
    //   401: 'ERROR'
    // },
  };

  constructor(private message: NzNotificationService) {}

  onHttpSuccess(message = 'Success', duration = 4000): void {
    this.message.create('success', 'Thành công', message, { nzDuration: duration });
  }

  onHttpFail(message = 'Error', duration = 4000): void {
    this.message.create('error', 'Thất bại', message, { nzDuration: duration });
  }

  showErrorMessage(err: any, from: string = ''): void {
    switch (err.error.status) {
      case 422:
        const fieldsError: IErrorList[] = err.error.error.fields;

        for (const field in fieldsError) {
          switch (fieldsError[field][0]) {
            case 'The email has already been taken.':
              this.onHttpFail('Địa chỉ email đã tồn tại');
              break;
            case 'The username has already been taken.':
              this.onHttpFail('Username đã tồn tại');
              break;
            case 'The selected email is invalid.':
              this.onHttpFail('Email không tồn tại');
              break;
            case 'The password reset token is invalid.':
              this.onHttpFail('Thời gian đặt lại mật khẩu đã hết hạn!');
              break;
            case 'The selected role is invalid.':
              this.onHttpFail('Chọn quyền thất bại');
              break;
            case 'The name has already been taken.':
              this.onHttpFail('Tên đã tồn tại');
              break;
            case 'The sub name has already been taken.':
              this.onHttpFail('Tên rút gọn đã tồn tại');
              break;
            case 'The phone has already been taken.':
              this.onHttpFail('Số điện thoại đã tồn tại');
              break;
            case 'The tax number has already been taken.':
              this.onHttpFail('Mã số thuế đã tồn tại');
              break;
            default:
              break;
          }
          // const field = errorsList.field;
          // for (const error of errorsList.errors) {
          //   switch (error.code) {
          //     case 1469:
          //       this.onHttpFail(
          //         `以前と同じ${this.listFieldError[field]}です。異なる${this.listFieldError[field]}に変更してください。`
          //       );
          //       break;
          //     case 1464:
          //       this.onHttpFail(this.listTextError[page][1464]);
          //       break;
          //     case 1426:
          //       this.onHttpFail(
          //         `${this.listFieldError[field]}アドレスが存在していません。再度ご確認ください。`
          //       );
          //       break;
          //     default:
          //       break;
          //   }
          // }
        }

        break;
      case 401:
        switch (from) {
          case 'login':
            this.onHttpFail(`Thông tin tài khoản, mật khẩu không chính xác`);
            break;
          default:
            this.onHttpFail(`Tài khoản chưa đăng nhập, vui lòng đăng nhập để tiếp tục`);
            break;
        }

        break;
      case 500:
        this.onHttpFail('Lỗi máy chủ, vui lòng thử lại sau một khoảng thời gian!');
        break;
      case 403:
        switch (from) {
          case 'login':
            this.onHttpFail(
              `Địa chỉ email chưa được xác thực, vui lòng kiểm tra email và xác thực tài khoản`
            );
            break;
          case 'change-pass':
            this.onHttpFail(`Mật khẩu cũ không chính xác`);
            break;
          default:
            this.onHttpFail('Tài khoản của bạn không có quyền thực hiện hành động này!');
            break;
        }

        break;
      default:
        this.onHttpFail('Lỗi không xác định, vui lòng thử lại!');
        break;
    }
  }
}
