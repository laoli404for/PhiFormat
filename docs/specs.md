# 规范文档

## 总览

```
(object) ->
    $schema (string)
    musicOffset (number)
    bpmList (array) ->
        (object) ->
            id (integer)
            time (integer)
            bpm (number)
    judgeLineList (array) ->
        (object) ->
            id (integer)
            constructTime (integer)
            destructTime (integer)
            noteList (array) ->
                (object) ->
                    id (integer)
                    type (integer) // 1 for tap, 2 for drag, 3 for hold, 4 for click
                    startTime (integer)
                    holdTime (integer)
                    x (number)
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
```