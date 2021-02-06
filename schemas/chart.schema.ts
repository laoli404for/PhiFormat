type integer = number;

export interface BpmData {
  id: integer;
  time: number;
  bpm: number;
}

export interface NoteData {
  id: integer;
  type: 1 | 2 | 3 | 4;
  time: number;
  holdTime: number;
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
  time: number;
  value: number;
  easing: Easing;
}

export interface JudgeLineData {
  id: integer;
  constructTime: number;
  destructTime: number;
  noteList: NoteData[];
  props: {
    controlX: State[];
    controlY: State[];
    angle: State[];
    speed: State[];
    noteAlpha: State[];
    lineAlpha: State[];
  };
}

export interface ChartData {
  musicOffset: number;
  bpmList: BpmData[];
  judgeLineList: JudgeLineData[];
}
