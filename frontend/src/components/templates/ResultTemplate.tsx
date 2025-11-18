import { Main, ProgressBtn } from "../atoms/index";

interface Values {
  values: Record<string, string | number | boolean>;
}

const ResultTemplate = ({ values }: Values) => {
  return (
    <Main className="flex flex-col items-center text-sm lg:text-base">
      <h2 className="text-base font-semibold lg:text-lg">Summary</h2>
      <section className="my-8 w-full max-w-sm space-y-2 text-center">
        <p className="font-medium">
          Medical parametres from previous page for measuring the risk of
          selected disease calculated in LLM.
        </p>
        {Object.entries(values).map(([key, value]) => (
          <div key={key}>
            {key}:{String(value)}
          </div>
        ))}
      </section>
      <ProgressBtn reverse />
    </Main>
  );
};

export default ResultTemplate;
