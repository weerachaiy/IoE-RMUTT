#include <SoftwareSerial.h>
#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <PZEM004T.h>

PZEM004T pzem(D6,D7);  // (RX,TX) connect to TX,RX of PZEM
IPAddress ip(192,168,1,1);

const char* ssid = "unseen";
const char* password = "tatao142";
const char* mqtt_server = "broker.mqtt-dashboard.com";

WiFiClient espClient;
PubSubClient client(espClient);

long lastMsg = 0;
char msg[100];

void setup() {
  pzem.setAddress(ip);
  pinMode(BUILTIN_LED, OUTPUT);     // Initialize the BUILTIN_LED pin as an output
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  client.setCallback(callback);
}

void setup_wifi() {
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();
  if ((char)payload[0] == '1') {
    digitalWrite(BUILTIN_LED, LOW);   // Turn the LED on (Note that LOW is the voltage level
  } 
  else {
    digitalWrite(BUILTIN_LED, HIGH);  // Turn the LED off by making the voltage HIGH
  }
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    if (client.connect("page2me")) {
      Serial.println("connected");
      client.publish("page2me","Hello World!");
      client.subscribe("page2me");
    } 
    else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}
void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
  float v = pzem.voltage(ip);
  float i = pzem.current(ip);
  float p = pzem.power(ip);
  float e = pzem.energy(ip);
  long now = millis();
  if (now - lastMsg > 5000) {
    lastMsg = now;
    snprintf(msg,100,"{\"V\":%.2f,\"I\":%.2f,\"P\":%.2f,\"E\":%.2f}",v,i,p,e);
    Serial.print("Publish message: ");
    Serial.println(msg);
    client.publish("page2me", msg);
  }
}
