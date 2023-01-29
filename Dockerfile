FROM node:16

COPY ./script.sh .
RUN chmod +x /script.sh

CMD /script.sh
