export interface Employee {
  id: number;
  name: string;
  department: string;
  hireDate: string;
  status: 'active' | 'suspended';
  image: string;
}
