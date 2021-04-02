# 规范文档

## 总览

```
(object) ->
    schemaVersion (integer)
    musicOffset (number)
    timingBase (integer)
    bpmList (array) ->
        (object) ->
            id (integer)
            time (integer)
            bpm (number)
    judgeLineList (array) ->
        (object) ->
            id (integer)
            noteList (array) ->
                (object) ->
                    id (integer)
                    type (integer) // 1 for tap, 2 for drag, 3 for hold, 4 for click
                    time (integer)
                    holdTime (integer)
                    x (number)
                    width (number)
                    speed (number)
                    side (integer) // 1 -1
                    isFake (boolean)
            props (object) ->
                controlX (array) ->
                    (object) ->
                        id (integer)
                        time (integer)
                        value (number)
                        easing (string)
                controlY ...
                angle ...
                speed ...
                noteAlpha ...
                lineAlpha ...
                displayRange ...
```

## 缓冲对照表

| ID  | Easing        | ID  | Easing         | ID  | Easing           |
| --- | ------------- | --- | -------------- | --- | ---------------- |
| 0   | none          |     |                |     |                  |
| 1   | easeInSine    | 2   | easeOutSine    | 3   | easeInOutSine    |
| 4   | easeInQuad    | 5   | easeOutQuad    | 6   | easeInOutQuad    |
| 7   | easeInCubic   | 8   | easeOutCubic   | 9   | easeInOutCubic   |
| 10  | easeInQuart   | 11  | easeOutQuart   | 12  | easeInOutQuart   |
| 13  | easeInQuint   | 14  | easeOutQuint   | 15  | easeInOutQuint   |
| 16  | easeInExpo    | 17  | easeOutExpo    | 18  | easeInOutExpo    |
| 19  | easeInCirc    | 20  | easeOutCirc    | 21  | easeInOutCirc    |
| 22  | easeInBack    | 23  | easeOutBack    | 34  | easeInOutBack    |
| 25  | easeInElastic | 26  | easeOutElastic | 27  | easeInOutElastic |
| 28  | easeInBounce  | 29  | easeOutBounce  | 30  | easeInOutBounce  |
