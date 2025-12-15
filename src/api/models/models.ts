
interface Employee{
    id: string; 
    name: string;
    DOB: Date;
    designation: string;
    salary: number;
    type: 'Active' | 'Terminated' | 'Benched'
    role: string
}

interface Project{
    id: string
    name: string
    status: 'Completed' | 'On-going'
    Client: string
    strength: number
    stack: string
}




