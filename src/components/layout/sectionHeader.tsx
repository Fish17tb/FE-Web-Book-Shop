import { useCurrentApp } from "../../utils/context/app.context";

const SectionHeader = () => {
  const {user} = useCurrentApp();

  return (
    <>
      <div>This is header</div>
        <div>
            {JSON.stringify(user)}
        </div>
    </>
  );
};

export default SectionHeader;
