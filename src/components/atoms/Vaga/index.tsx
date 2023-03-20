import React,{useState} from "react";
import ReactMarkdown from "react-markdown";

interface VagaProps {
	title: string;
	body: string;
	date: Date;
	labels: {
		name: string;
		color: string;
	}[];
}

function Vaga({ title, body, date, labels }: VagaProps) {
	const [isClicked, setIsClicked] = useState(false);
	return (
		<article
			className="w-full max-w-xl mx-auto p-4 flex flex-col bg-white shadow-[rgba(66,_66,_66,_0.2)_0px_2px_1px_-1px,rgba(66,_66,_66,_0.14)_0px_1px_1px_0px,_rgba(66,_66,_66,_0.12)_0px_1px_3px_0px] rounded-xl cursor-pointer -tracking-tighter space-y-3"
			onClick={() => setIsClicked(!isClicked)}
		>
			<header>
				<h2>{title}</h2>
				Publicada em <time>{date.toString()}</time>
			</header>
			<ul className="flex flex-wrap space-x-2">
				{labels.map((label) => (
					<li
						key={label.name}
						className={`text-xs font-semibold tracking-widest uppercase text-[#666666] px-2 py-1`}
						style={{
							borderColor: `#${label.color}`,
							borderWidth: "1px",
							borderStyle: "solid",
							borderRadius: "5px",
							padding: "5px",
							margin: "5px",
						}}
					>
						{label.name}
					</li>
				))}
			</ul>
			{isClicked && (
				<div>
					<div className="">
						<ReactMarkdown>{body}</ReactMarkdown>
					</div>
				</div>
			)}
		</article>
	);
}

export default Vaga;
