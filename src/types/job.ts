export interface Job{
    slug: string;
    id: string;
    title: string;
    company: string;
    location: string;
    remote: boolean;
    description: string;
    createdAt: string;
}

// sadece apiden gelen ham veriyi temsil eder
export interface JobApiResponse{
    slug: string;
    title: string;
    company_name: string;
    location: string;
    remote: boolean;
    description: string;
    created_at: string;
}