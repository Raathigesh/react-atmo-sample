import React from "react";
import Atmo from "react-atmo";

Atmo.listen(
  <server port="9000">
    <route method="get" url="/unicorns">
      <response>
        {(request, response) => ({
          name: "Adiana",
          description: "The fiery one"
        })}
      </response>
      <headers>
        <jsonContentType />
        <crossOrigin />
        <header name="x-powered-by" value="Unicorn JS" />
      </headers>
    </route>
  </server>
);
