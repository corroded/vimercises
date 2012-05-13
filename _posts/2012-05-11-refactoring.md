---
layout: exercise_layout
stroke_count: 14
title: refactoring
---

    def some_method
      foo + another_method
    end

    def another_method
      bar
    end

Delete *another_method* and replace the method call (*another_method*) in some_method with the contents *atrb*.

It should look like this:

    def some_method
      foo + bar
    end

No yanking of the text above!
