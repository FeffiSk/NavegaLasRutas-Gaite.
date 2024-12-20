import PerfumeCard from "../components/PerfumeCard";
import perfumes from "../perfumes";

const PerfumeList = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
    {perfumes.map((perfume) => (
      <PerfumeCard key={perfume.id} perfume={perfume} />
    ))}
  </div>
);

export default PerfumeList;