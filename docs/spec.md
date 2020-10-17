# 规范文档

## PhiFormat 总体一览

```
(object) ->
    $schema (string)
    timing (object) ->
        offset (number)
        bpmList (array) -> // Should not be empty.
            (object) ->
                id (integer)
                time (integer)
                bpm (number)
    judgeLineList (array) ->
        (object) ->
            id (integer)
            eventList (array) ->
                (object) ->
                    id (integer)
                    type (string) // move, rotate, fade, speed or construct.
                    startTime (integer)
                    endTime (integer)
                    properties (object) ->
                        (...)
            noteList (array) ->
                (object) ->
                    id (integer)
                    type (string) // click, flick, drag or hold.
                    startTime (integer)
                    endTime (integer)
                    showTime (integer) // Defaults to 0.
                    relativeX (number)
                    side (integer) // Should be 1 or -1.
                    speed (number) // Defaults to 1.
                    isFake (bool) // Defaults to false.
```

## 数据结构

### TypeScript

```typescript
export interface BpmData {
  id: number;
  time: number;
  bpm: number;
}

export interface TimingData {
  offset: number;
  bpmList: BpmData[];
}

export type Ease =
  'linear'    |
  'backIn'    | 'backOut'    |
  'bounceIn'  | 'bounceOut'  |
  'circIn'    | 'circOut'    |
  'cubicIn'   | 'cubicOut'   |
  'elasticIn' | 'elasticOut' |
  'expoIn'    | 'expoOut'    |
  'quadIn'    | 'quadOut'    |
  'quartIn'   | 'quartOut'   |
  'quintIn'   | 'quintOut'   |
  'sineIn'    | 'sineOut'    ;

export interface BaseEventData {
  id: number;
  type: string;
  startTime: number;
  endTime: number;
  properties: Record<string, any>;
}

export interface ConstructEventData extends BaseEventData {
  type: 'construct';
  properties: {
    x: number;
    y: number;
    angle: number;
    alpha: number;
    speed: number;
  };
}

export interface MoveEventData extends BaseEventData {
  type: 'move';
  properties: {
    x: number;
    y: number;
    easeX: Ease;
    easeY: Ease;
  };
}

export interface RotateEventData extends BaseEventData {
  type: 'rotate';
  properties: {
    angle: number;
    ease: Ease;
  };
}

export interface FadeEventData extends BaseEventData {
  type: 'fade';
  properties: {
    alpha: number;
    ease: Ease;
  };
}

export interface SpeedEventData extends BaseEventData {
  type: 'speed';
  properties: {
    speed: number;
    ease: Ease;
  };
}

export type EventData = ConstructEventData | MoveEventData | RotateEventData | FadeEventData | SpeedEventData;

export interface BaseNoteData {
  id: number;
  type: string;
  startTime: number;
  endTime: number;
  showTime: number;
  relativeX: number;
  side: 1 | -1;
  speed: number;
  isFake: boolean;
}

export interface ClickNoteData extends BaseNoteData {
  type: 'click';
}

export interface FlickNoteData extends BaseNoteData {
  type: 'flick';
}

export interface DragNoteData extends BaseNoteData {
  type: 'drag';
}

export interface HoldNoteData extends BaseNoteData {
  type: 'hold';
}

export type NoteData = ClickNoteData | FlickNoteData | DragNoteData | HoldNoteData;

export interface JudgeLineData {
  id: number;
  eventList: EventData[];
  noteList: NoteData[];
}

export interface ChartData {
  timing: TimingData;
  judgeLineList: JudgeLineData[];
}
```
