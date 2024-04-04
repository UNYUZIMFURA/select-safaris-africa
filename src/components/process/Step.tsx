interface Props {
  no: number;
  title: string;
}

const Step: React.FC<Props> = (props) => {
  return (
    <div className="w-full flex flex-col gap-8 pt-6 pb-12 px-4 text-tertiary1 bg-theme1 rounded-[10px] cursor-pointer relative">
      <div className="h-[3.5rem] w-[3.5rem] flex items-center justify-center text-primary rounded-full bg-theme4">
        <span className="font-bold text-brand">{props.no}</span>
      </div>
      <h2 className="font-bold text-[20px] pl-1">{props.title}</h2>
      <p className="text-secondary pl-1 xl:max-w-[28rem]">
        Lorem ipsum dolor sit amet, consectetuer adipscing elit. Donnec odio.
      </p>
    </div>
  );
};

export default Step;
