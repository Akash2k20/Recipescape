FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 8080
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]


ENV HOST=bmedq0nar6e4sgts4cgy-mysql.services.clever-cloud.com
ENV DATABASE=bmedq0nar6e4sgts4cgy
ENV USER=uhjwhzogv6cew9fl
ENV PORT=8080
ENV PASSWORD=JEDOZxCBNHdz58dWrO5C
ENV URI=mysql://uhjwhzogv6cew9fl:JEDOZxCBNHdz58dWrO5C@bmedq0nar6e4sgts4cgy-mysql.services.clever-cloud.com:3306/bmedq0nar6e4sgts4cgy


ENV SECRET = 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
ENV CLIENT_ID = 682427636885-kiphicjnq4i21isuuqsq96vbsd9u2hju.apps.googleusercontent.com
