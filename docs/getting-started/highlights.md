---
id: highlights
title: Main highlights
---

At this point you know how to build the simplest real-time app with Centrifugo. Beyond the core PUB/SUB functionality Centrifugo provides more features and primitives to build scalable real-time applications. Let's summarize main Centrifugo ✨highlights✨ here. Every point is then extended throughout the documentation.

### Simple integration

Centrifugo was originally designed to be used in conjunction with frameworks without built-in concurrency support (like Django, Laravel, etc.).

It works as a standalone service with well-defined communication contracts. It fits very well in both monolithic and microservice architecture. Application developers should not change backend philosophy at all – just integrate with Centrifugo [HTTP or GRPC API](../server/server_api.md) and let users enjoy real-time updates.

### Great performance

Centrifugo is pretty fast. It's written in Go language, built on top of fast and battle-tested open-source libraries, has some smart internal optimizations like message queuing on broadcasts, smart batching to reduce the number of RTT with broker, connection hub sharding to avoid lock contention, JSON and Protobuf encoding speedups over code generation and other.

See a [Million WebSocket with Centrifugo](/blog/2020/02/10/million-connections-with-centrifugo) post in our blog to see some real-world numbers.

### Built-in scalability

Centrifugo scales well to many machines with a help of PUB/SUB brokers. So as soon as you have more client connections in the application – you can spread them over different Centrifugo nodes which will be connected together into a cluster.

The main PUB/SUB engine Centrifugo integrates with is Redis. It supports client-side consistent sharding and Redis Cluster – so a single Redis instance won't be a bottleneck also.

There are other options to scale: KeyDB, Nats, Tarantool. [See docs](../server/engines.md).

### Strict client protocol

Centrifugo supports JSON and binary Protobuf protocol for client-server communication. The bidirectional protocol is defined by a strict schema and several ready-to-use SDKs wrap this protocol, handle asynchronous message passing, timeouts, reconnect, and various Centrifugo client API features. See the detailed information about client real-time transports in a [dedicated section](../transports/overview.md).

### Variety of real-time transports

The main transport in Centrifugo is WebSocket. It's a bidirectional transport on top of TCP with low overhead. For browsers that do not support WebSocket Centrifugo provides its own bidirectional WebSocket emulation layer based on HTTP-streaming and EventSource (SSE), and also supports SockJS as an older but battle-tests WebSocket polyfill option, and WebTransport in experimental form.

Centrifugo also supports unidirectional transports for real-time updates: like SSE (EventSource), HTTP streaming, GRPC unidirectional stream. Using unidirectional transport is sufficient for many real-time applications and does not require using custom client connectors – just native APIs or GRPC-generated code.

See the detailed information about client real-time transports in a [dedicated section](../transports/overview.md).

### Flexible authentication

Centrifugo can authenticate connections using [JWT (JSON Web Token)](../server/authentication.md) or by [issuing an HTTP/GRPC](../server/proxy.md) request to your application backend upon connection attempt. It's possible to proxy original request headers or request metadata (in the case of GRPC connection).

It supports the [JWK specification](https://datatracker.ietf.org/doc/html/rfc7517).

### Connection management

Connections can expire, developers can choose a way to handle connection refresh – using a client-side refresh workflow, or a server-side call from Centrifugo to the application backend. 

### Channel (room) concept

Centrifugo is a PUB/SUB server – users subscribe on channels to receive real-time updates. Message sent to a channel will be delivered to all active subscribers.

### Different types of subscriptions

Centrifugo is unique in terms of the fact that it supports both client-side and [server-side channel subscriptions](../server/server_subs.md).

### RPC over bidirectional connection

You can fully utilize bidirectional connections by sending RPC calls from the client-side to a configured endpoint on your backend. Calling RPC over WebSocket avoids sending headers on each request – thus reducing external traffic and, in most cases, provides better latency characteristics.

### Online presence information

It's possible to turn on an online presence feature for channels so you will have information about active channel subscribers. Channel join and leave events (when a user subscribes/unsubscribes) can also be sent.

### Message history in channels

Optionally Centrifugo allows turning on history for publications in channels. This publication history has a limited size and retention period (TTL). With a channel history, Centrifugo can help to survive the mass reconnect scenario. Clients can automatically recover missed messages from a cache – thus reducing the load on your primary database. It's also possible to manually iterate over a stream from a client or a server-side.

### Embedded admin web UI

Built-in administrative [web UI](../server/admin_web.md) allows publishing messages to channels, looking at Centrifugo cluster state, monitoring stats, etc.

### Cross-platform

Centrifugo works on Linux, macOS, and Windows.

### Ready to deploy

Centrifugo supports various deploy ways: in Docker, using prepared RPM or DEB packages, via Kubernetes Helm chart. It supports automatic TLS with Let's Encrypt TLS, outputs Prometheus/Graphite metrics, has an official Grafana dashboard for Prometheus data source.

### Open-source

Centrifugo stands on top of open-source library Centrifuge (MIT license). The OSS version of Centrifugo is based on the permissive open-source license (Apache 2.0). All client connectors are also MIT-licensed.

### Pro features

Centrifugo PRO extends Centrifugo with several unique features which can give interesting advantages for business adopters. 

With Centrifugo PRO it's possible to trace specific user or specific channel events in real-time. Centrifugo PRO integrates with ClickHouse for real-time connection analytics. This all may help with understanding client behavior, inspect and analyze an application on a very granular level.

Centrifugo PRO offers even more extensions that tend to be useful in practice. This includes user active status and throttling features. Active status is useful to build messenger-like applications where you want to show online indicators of users based on last activity time, throttling can help you limit the number of operations each user may execute on a Centrifugo cluster.

For additional details, refer to the [Centrifugo PRO documentation](../pro/overview.md). 
