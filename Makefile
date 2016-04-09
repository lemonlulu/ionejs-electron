BROWSERIFY=browserify

APPJS=app.js
SRCJS=main.js
MOD=node_modules

default: all
.DEFAULT:

all: $(APPJS)
.PHONY: all

$(APPJS): $(SRCJS) $(MOD)
	$(BROWSERIFY) -t [ babelify --presets [ react ] ] $(SRCJS) -o $(APPJS)
.PHONY: $(APPJS)

$(MOD): package.json
	npm install

export: $(EXPORTSJS)
	$(BROWSERIFY) -t [ babelify --presets [ react ] ] export.js -o export1.js

clean:
	rm -rf $(APPJS)
