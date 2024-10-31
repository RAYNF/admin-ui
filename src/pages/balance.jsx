import MainLayout from "../components/layout/MainLayout";
import Card from "../components/elements/card";

const BalancePage = () => {
  return (
    <MainLayout type="balance">
      {/* top content start */}
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
          <Card />
        </div>

        <div className="sm:w-1/3">
          <Card />
        </div>

        <div className="sm:w-1/3">
          <Card />
        </div>
      </div>
      {/* top content end */}

      {/* bottom content start */}
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
          <Card />
        </div>

        <div className="sm:w-1/3">
          <Card />
        </div>

        <div className="sm:w-1/3">
          <Card />
        </div>
      </div>
      {/* bottom content end */}
    </MainLayout>
  );
};

export default BalancePage;
