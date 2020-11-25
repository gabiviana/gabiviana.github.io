# find . -type f -regextype posix-egrep -regex '.*\.html$' -exec sed -i 's/\r//' {} \;
# find . -type f -regextype posix-egrep -regex '.*\.html$' -exec sed -i 's/\.\.\/\.\.\/wp-content/\/blog\/wp-content/' {} \;
# find . -type f -regextype posix-egrep -regex '.*\.html$' -exec sed -i 's/\.\.\/\.\.\/\.\.\/\.\.\/wp-content/\/blog\/wp-content/' {} \;
