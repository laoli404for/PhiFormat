type integer = number;

export interface BpmData {
  id: integer;
  time: integer;
  bpm: number;
}

export interface NoteData {
  id: integer;
  type: 1 | 2 | 3 | 4;
  time: integer;
  holdTime: integer;
  x: number;
  speed: number;
  side: 1 | -1;
  isFake: boolean;
}

export type Easing =
  | 'easeInBack'
  | 'easeInBounce'
  | 'easeInCirc'
  | 'easeInCubic'
  | 'easeInElastic'
  | 'easeInExpo'
  | 'easeInOutBack'
  | 'easeInOutBounce'
  | 'easeInOutCirc'
  | 'easeInOutCubic'
  | 'easeInOutElastic'
  | 'easeInOutExpo'
  | 'easeInOutQuad'
  | 'easeInOutQuart'
  | 'easeInOutQuint'
  | 'easeInOutSine'
  | 'easeInQuad'
  | 'easeInQuart'
  | 'easeInQuint'
  | 'easeInSine'
  | 'easeOutBack'
  | 'easeOutBounce'
  | 'easeOutCirc'
  | 'easeOutCubic'
  | 'easeOutElastic'
  | 'easeOutExpo'
  | 'easeOutQuad'
  | 'easeOutQuart'
  | 'easeOutQuint'
  | 'easeOutSine'
  | 'linear'
  | 'none';

export interface State {
  id: integer;
  time: integer;
  value: number;
  easing: Easing;
}

export interface JudgeLineData {
  id: integer;
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
  schemaVersion: integer;
  musicOffset: number;
  timingBase: integer;
  bpmList: BpmData[];
  judgeLineList: JudgeLineData[];
}
