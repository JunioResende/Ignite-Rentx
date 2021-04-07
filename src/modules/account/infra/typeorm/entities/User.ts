import { v4 } from 'uuid';

class User {
  id: string;
  name: string;
  email: string;
  password: string;
  driver_license: string;
  isAdmin: boolean;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { User };
