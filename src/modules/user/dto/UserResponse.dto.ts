export class UserResponseDto {
    user_id: number;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    created_at: Date;
  
    constructor(user: any) {
      this.user_id = user.user_id;
      this.name = user.name;
      this.email = user.email;
      this.phone = user.phone;
      this.address = user.address;
      this.created_at = user.created_at;
    }
  }
  