import { Octokit } from "@octokit/rest";

export const repositories = [
    "frontendbr/vagas",
    "backend-br/vagas",
    "react-brasil/vagas",
    "vuejs-br/vagas",
    "dotnetdevbr/vagas",
    "phpdevbr/vagas",
    "androiddevbr/vagas",
    "pydevbr/vagas",
    "Gommunity/vagas",
    "CocoaHeadsBrasil/vagas",
    "flutterbr/vagas",
    "frontend-pt/vagas",
    "backend-pt/vagas",
    "frontend-ao/vagas",
    "backend-ao/vagas",
    "CangaceirosDevels/vagas_de_emprego",
];

export default async function fetchVagas() {
    const octokit = new Octokit({
        auth: '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',
    });

    const issues = await Promise.all(
        repositories.map(async (repository) => {
            const [owner, repo] = repository.split("/");
            const { data } = await octokit.request(`GET /repos/${owner}/${repo}/issues`, {
                owner: owner,
                repo: repo,
            });
            return data;
        })
    );

    return issues.flat();
}
