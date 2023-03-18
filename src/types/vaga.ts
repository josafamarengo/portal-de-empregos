interface Vaga {
    id: number;
    title: string;
    body: string;
    labels: {
        id: number;
        name: string;
        description: string;
        color: string;
    }[];
    created_at: Date;
    user: {
        avatar_url: string;
        html_url: string;
        login: string;
    };
    html_url: string;
}

export default Vaga;