FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .

ENV HOST=bmedq0nar6e4sgts4cgy-mysql.services.clever-cloud.com
ENV DATABASE=bmedq0nar6e4sgts4cgy
ENV USER=uhjwhzogv6cew9fl
ENV PORT=8080
ENV PASSWORD=JEDOZxCBNHdz58dWrO5C
ENV URI=mysql://uhjwhzogv6cew9fl:JEDOZxCBNHdz58dWrO5C@bmedq0nar6e4sgts4cgy-mysql.services.clever-cloud.com:3306/bmedq0nar6e4sgts4cgy


ENV SECRET = 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
ENV CLIENT_ID = 682427636885-kiphicjnq4i21isuuqsq96vbsd9u2hju.apps.googleusercontent.com

EXPOSE 8080
CMD ["npm","start"]