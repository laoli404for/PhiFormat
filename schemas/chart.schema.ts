export interface BpmData {
  id: number;
  time: number;
  bpm: number;
}

export interface NoteData {
  id: number;
  type: 1 | 2 | 3 | 4;
  time: number;
  holdTime: number;
  x: number;
  width: number;
  speed: number;
  side: 1 | -1;
  isFake: boolean;
}

export interface State {
  id: number;
  time: number;
  value: number;
  easing: number | null;
}

export interface JudgeLineData {
  id: number;
  noteList: NoteData[];
  props: {
    controlX: State[];
    controlY: State[];
    angle: State[];
    speed: State[];
    noteAlpha: State[];
    lineAlpha: State[];
    displayRange: State[];
  };
}

export interface ChartData {
  schemaVersion: number;
  musicOffset: number;
  timingBase: number;
  bpmList: BpmData[];
  judgeLineList: JudgeLineData[];
}
