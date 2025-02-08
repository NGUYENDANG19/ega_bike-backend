export class User {
    user_id?: number;
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
    address?: string;
    created_at?: Date;
    role_id?: number;


    constructor(user_id: number, name: string, email: string, password: string, phone: string, address: string, created_at: Date, role_id: number) {
        this.user_id = user_id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.created_at = created_at;
        this.role_id = role_id;
    }
}
