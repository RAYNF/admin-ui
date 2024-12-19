import MainLayout from "../components/layout/MainLayout";
import Card from "../components/elements/card";

const GoalsPage = () => {
  return (
    <MainLayout type="goals">
      {/* top content start*/}

      <div className="md:grid md:grid-cols-3 md:gap-6">
        <Card title="Goals" />
        <div className="md:col-span-2 flex flex-col flex-1 text-primary">
          <Card
            title="&nbsp;"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like"
          />
        </div>
        <Card title="Expense Goals and Category" />
        <Card title="&nbsp;" />
        <Card
          title="&nbsp;"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like"
        />
        <Card />
        <Card desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like" />
        <Card />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default GoalsPage;
