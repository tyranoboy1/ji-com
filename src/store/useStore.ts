import { create } from "zustand";

/** tab menu 타입 설정 */
type TabType = "rec" | "fol";

/** store 초기상태 인터페이스 */
interface InitialState {
  tab: TabType;
  setActiveTab: (pTab: TabType) => void;
}

const useStore = create<InitialState>((set) => ({
  tab: "rec",
  setActiveTab: (newTab) => set({ tab: newTab }),
}));

export default useStore;
