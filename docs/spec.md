# 规范文档

## PhiFormat 总体一览

```
(object) ->
    $schema (string)
    timing (object) ->
        offset (number)
        bpmList (array) ->
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
                    type (string) // Or integer? Need further discussion.
                    startTime (integer)
                    endTime (integer)
                    properties (object) ->
                        (...)
            speedList (array) ->
                (object) ->
                    id (integer)
                    time (integer)
                    speed (number)
            noteList (array) ->
                (object) ->
                    id (integer)
                    type (integer) // This can be integer since notes have only 4 types.
                    startTime (integer)
                    endTime (integer)
                    relativeX (number)
                    side (integer) // Should be 1 or -1.
                    speed (number, optional)
                    isFake (bool)

```