export default function AboutSection({ aboutData }) {
  if (!aboutData || Object.keys(aboutData).length === 0) {
    return <p>ไม่พบข้อมูลเกี่ยวกับเรา</p>;
  }

  return (
    <section className="max-w-3xl mx-auto p-6">
      {/* รูปภาพ */}
      {aboutData.imageUrl && (
        <div className="mb-4">
          <img
            src={aboutData.imageUrl}
            alt={aboutData.mainName || "About image"}
            className="w-40 h-40 object-cover rounded-full mx-auto"
          />
        </div>
      )}

      {/* ชื่อหลัก */}
      <h1 className="text-2xl font-bold text-center mb-2">
        {aboutData.mainName ?? "ไม่ระบุชื่อ"}
      </h1>

      {/* ชื่อเต็ม */}
      <h2 className="text-lg text-gray-700 text-center mb-4">
        {aboutData.fullName ?? ""}
      </h2>

      {/* การศึกษา */}
      {aboutData.education && (
        <p className="text-base mb-2">
          <strong>การศึกษา:</strong> {aboutData.education}
        </p>
      )}

      {/* ข้อมูลอื่น ๆ */}
      {aboutData.Other && (
        <p className="text-base mb-2">
          <strong>อื่น ๆ:</strong> {aboutData.Other}
        </p>
      )}

      {/* ข้อมูลเพิ่มเติม */}
      {aboutData.additionallInfo && (
        <p className="text-base mb-2">
          <strong>เพิ่มเติม:</strong> {aboutData.additionallInfo}
        </p>
      )}
    </section>
  );
}
