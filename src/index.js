import React from "react";
import Atmo, { Headers } from "react-atmo";

Atmo.listen(
  <server port="9001">
    <route method="get" url="/unicorns">
      <headers>
        <Headers.CrossOriginHeader />
        <Headers.JsonContentTypeHeader />
        <header name="x-powered-by" value="Unicorn JS" />
      </headers>
      <response>
        {() => ({
          name: "Adiana",
          description: "The fiery one"
        })}
      </response>
    </route>
  </server>
);
