import { Url } from "next/dist/shared/lib/router/router"

type Tag = {
        "id": string,
        "type": string,
        "attributes": {
          "name": {
            "en": string
          },
          "description": {},
          "group": string,
          "version": number
        },
        "relationships": Array
}