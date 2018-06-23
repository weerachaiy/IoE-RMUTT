[
    {
        "id": "b284505f.9aecd",
        "type": "mqtt in",
        "z": "ca95f8ee.bbed18",
        "name": "mqtt",
        "topic": "page2me",
        "qos": "2",
        "broker": "7aeed02b.f4c9",
        "x": 90,
        "y": 80,
        "wires": [
            [
                "34522608.a2cc6a"
            ]
        ]
    },
    {
        "id": "1812848a.053f5b",
        "type": "function",
        "z": "ca95f8ee.bbed18",
        "name": "V",
        "func": "msg.payload = msg.payload.V\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 350,
        "y": 100,
        "wires": [
            [
                "a5f5ef6b.a29e6"
            ]
        ]
    },
    {
        "id": "34522608.a2cc6a",
        "type": "json",
        "z": "ca95f8ee.bbed18",
        "name": "",
        "property": "payload",
        "action": "obj",
        "pretty": true,
        "x": 150,
        "y": 200,
        "wires": [
            [
                "1812848a.053f5b",
                "4557ad9f.d5cdb4",
                "5af5134.7137fec",
                "2710aff7.318f1"
            ]
        ]
    },
    {
        "id": "4557ad9f.d5cdb4",
        "type": "function",
        "z": "ca95f8ee.bbed18",
        "name": "I",
        "func": "msg.payload = msg.payload.I\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 370,
        "y": 160,
        "wires": [
            [
                "81550a14.ed6fb8"
            ]
        ]
    },
    {
        "id": "5af5134.7137fec",
        "type": "function",
        "z": "ca95f8ee.bbed18",
        "name": "P",
        "func": "msg.payload = msg.payload.P\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 370,
        "y": 240,
        "wires": [
            [
                "43604b26.08d6b4"
            ]
        ]
    },
    {
        "id": "2710aff7.318f1",
        "type": "function",
        "z": "ca95f8ee.bbed18",
        "name": "E",
        "func": "msg.payload = msg.payload.E\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 370,
        "y": 300,
        "wires": [
            [
                "9f483f35.da23e"
            ]
        ]
    },
    {
        "id": "a5f5ef6b.a29e6",
        "type": "ui_gauge",
        "z": "ca95f8ee.bbed18",
        "name": "",
        "group": "d4051628.059a78",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "V",
        "label": "V.",
        "format": "{{value}}",
        "min": 0,
        "max": " 260",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 590,
        "y": 60,
        "wires": []
    },
    {
        "id": "81550a14.ed6fb8",
        "type": "ui_gauge",
        "z": "ca95f8ee.bbed18",
        "name": "",
        "group": "d4051628.059a78",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "I",
        "label": "A.",
        "format": "{{value}}",
        "min": 0,
        "max": "25",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 610,
        "y": 140,
        "wires": []
    },
    {
        "id": "43604b26.08d6b4",
        "type": "ui_gauge",
        "z": "ca95f8ee.bbed18",
        "name": "",
        "group": "68052bc2.09dcc4",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "P",
        "label": "W.",
        "format": "{{value}}",
        "min": 0,
        "max": "50",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 610,
        "y": 220,
        "wires": []
    },
    {
        "id": "9f483f35.da23e",
        "type": "ui_gauge",
        "z": "ca95f8ee.bbed18",
        "name": "",
        "group": "68052bc2.09dcc4",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "E",
        "label": "Wh",
        "format": "{{value}}",
        "min": 0,
        "max": "50",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 610,
        "y": 320,
        "wires": []
    },
    {
        "id": "9920237a.a99bf",
        "type": "function",
        "z": "ca95f8ee.bbed18",
        "name": "Line-Notify",
        "func": "msg.headers = {'content-type':'application/x-www-form-urlencoded','Authorization':'Bearer 4BMZji1dHFaQ03Jk2TeVPlyonzUq57VDwTF1dMwFYnJ'};\nmsg.payload = {\"message\":\"เปิดไฟแล้วค่ะ\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 350,
        "y": 380,
        "wires": [
            [
                "4566356d.25292c"
            ]
        ]
    },
    {
        "id": "4566356d.25292c",
        "type": "http request",
        "z": "ca95f8ee.bbed18",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "url": "https://notify-api.line.me/api/notify",
        "tls": "",
        "x": 580,
        "y": 380,
        "wires": [
            [
                "cf6ad1f0.ef2d4"
            ]
        ]
    },
    {
        "id": "cf6ad1f0.ef2d4",
        "type": "debug",
        "z": "ca95f8ee.bbed18",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 660,
        "y": 460,
        "wires": []
    },
    {
        "id": "72c4cb8f.fc4214",
        "type": "function",
        "z": "ca95f8ee.bbed18",
        "name": "Line-Notify",
        "func": "msg.headers = {'content-type':'application/x-www-form-urlencoded','Authorization':'Bearer wif6EL9SprqAEAaLbBYoqvotCUh4spZb0PnTbEbwbwN'};\nmsg.payload = {\"message\":\"ปิดไฟแล้วครับ\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 350,
        "y": 440,
        "wires": [
            [
                "4566356d.25292c"
            ]
        ]
    },
    {
        "id": "b6ba80d1.2cbfb",
        "type": "switch",
        "z": "ca95f8ee.bbed18",
        "name": "non-zero",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "gt",
                "v": "0",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 160,
        "y": 400,
        "wires": [
            [
                "9920237a.a99bf"
            ]
        ]
    },
    {
        "id": "5c9f8a15.631ed4",
        "type": "switch",
        "z": "ca95f8ee.bbed18",
        "name": "non-zero",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "lt",
                "v": "1",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 160,
        "y": 440,
        "wires": [
            [
                "72c4cb8f.fc4214"
            ]
        ]
    },
    {
        "id": "5b7241ed.218ea",
        "type": "mqtt in",
        "z": "ca95f8ee.bbed18",
        "name": "",
        "topic": "page2meSW",
        "qos": "2",
        "broker": "7aeed02b.f4c9",
        "x": 110,
        "y": 320,
        "wires": [
            [
                "b6ba80d1.2cbfb",
                "5c9f8a15.631ed4"
            ]
        ]
    },
    {
        "id": "7aeed02b.f4c9",
        "type": "mqtt-broker",
        "z": "",
        "name": "broker.mqtt-dashboard.com",
        "broker": "broker.mqtt-dashboard.com",
        "port": "1883",
        "clientid": "weerachaiy",
        "usetls": false,
        "compatmode": true,
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "willTopic": "",
        "willQos": "0",
        "willPayload": ""
    },
    {
        "id": "d4051628.059a78",
        "type": "ui_group",
        "z": "",
        "name": "1",
        "tab": "6753aa40.887954",
        "disp": false,
        "width": "6",
        "collapse": false
    },
    {
        "id": "68052bc2.09dcc4",
        "type": "ui_group",
        "z": "",
        "name": "2",
        "tab": "6753aa40.887954",
        "order": 2,
        "disp": false,
        "width": "6",
        "collapse": false
    },
    {
        "id": "6753aa40.887954",
        "type": "ui_tab",
        "z": "",
        "name": "myIoT",
        "icon": "dashboard",
        "order": 1
    }
]
