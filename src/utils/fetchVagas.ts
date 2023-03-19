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

export default async function fetchVagas(label?: String[] | String) {
    const octokit = new Octokit({
			auth: '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',
		});

    const issues = await Promise.all(
        repositories.map(async (repository) => {
            const [owner, repo] = repository.split("/");
            const { data } = await octokit.request(`GET /repos/${owner}/${repo}/issues`, {
                owner: owner,
                repo: repo,
								labels: label,
            });
            return data;
        })
    );

    return issues.flat();
}
