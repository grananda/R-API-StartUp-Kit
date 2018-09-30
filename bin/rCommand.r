#!/usr/bin/env Rscript

tryCatch (
 {
    # Your code goes here...

    cat(200);
  }, error = function(err) {
    cat(500)
  });
