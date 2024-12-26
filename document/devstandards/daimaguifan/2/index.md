# 2. 日志打印规范

在前端项目中，随着项目迭代升级，日志打印逐渐风格不一，合理的日志输出是监控应用状态、调试代码和跟踪用户行为的重要手段。一个好的日志系统能够帮助开发者快速定位问题，提高开发效率。本文将介绍如何在前端项目中制定日志输出规范。

### 1. 日志等级

首先，我们需要定义不同的日志等级，以便根据消息的重要性进行分类。通常，日志等级从低到高可以分为以下几类：

- **DEBUG**: 详细的开发时信息，用于调试应用。
- **INFO**: 重要事件的简要信息，如系统启动、配置等。
- **WARN**: 系统能正常运行，但有潜在错误的情况。
- **ERROR**: 由于严重的问题，某些功能无法正常运行。
- **FATAL**: 非常严重的问题，可能导致系统崩溃。

### 2. 日志内容

日志内容应该包含足够的信息，以便于开发者理解发生了什么。一个完整的日志消息通常包括：

- **时间戳**：精确到毫秒的事件发生时间。
- **日志等级**：当前日志消息的等级。
- **消息内容**：描述事件的详细信息。
- **错误堆栈**：如果是错误，提供错误堆栈信息。

### 3. 日志格式

日志的格式应该统一，以便于阅读和解析。一个常见的日志格式如下：

```
[时间戳] [日志等级] [消息内容] [错误堆栈]
```

例如：

```
[2024-04-01T12:00:00.000Z] [ERROR] Failed to load user data. {stack}
```

### 4. 日志输出

在前端项目中，我们通常使用 `console` 对象进行日志输出。不同的日志等级可以使用不同的 `console` 方法：

- `console.debug` 用于 `DEBUG` 级别。
- `console.info` 用于 `INFO` 级别。
- `console.warn` 用于 `WARN` 级别。
- `console.error` 用于 `ERROR` 和 `FATAL` 级别。

### 5. 日志封装

为了更好地控制日志输出，我们可以封装一个日志工具，来统一管理日志输出。以下是一个简单的日志工具实现：

```javascript
class Logger {
  static level = 'DEBUG'; // 默认为 DEBUG 级别

  static setLevel(newLevel) {
    this.level = newLevel;
  }

  static shouldLog(level) {
    const levels = ['DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL'];
    return levels.indexOf(level) >= levels.indexOf(this.level);
  }

  static log(level, message, error) {
    if (!this.shouldLog(level)) {
      return;
    }
    const timestamp = new Date().toISOString();
    const stack = error ? error.stack : '';
    const formattedMessage = `[${timestamp}] [${level}] ${message} ${stack}`;

    switch (level) {
      case 'DEBUG':
        console.debug(formattedMessage);
        break;
      case 'INFO':
        console.info(formattedMessage);
        break;
      case 'WARN':
        console.warn(formattedMessage);
        break;
      case 'ERROR':
      case 'FATAL':
        console.error(formattedMessage);
        break;
      default:
        console.log(formattedMessage);
    }
  }

  static debug(message) {
    this.log('DEBUG', message);
  }

  static info(message) {
    this.log('INFO', message);
  }

  static warn(message) {
    this.log('WARN', message);
  }

  static error(message, error) {
    this.log('ERROR', message, error);
  }

  static fatal(message, error) {
    this.log('FATAL', message, error);
  }
}

// 使用示例
Logger.info('Application is starting...');
Logger.error('Failed to load user data', new Error('Network Error'));
```

### 6. 日志收集

在生产环境中，我们可能需要将日志发送到后端服务器进行收集和分析。这可以通过 AJAX 请求或专门的日志服务来实现。例如，我们可以修改 `Logger` 工具，添加一个方法来发送日志：

```javascript
class Logger {
  // ...其他方法

  static sendLog(message) {
    // 假设我们有一个日志收集的 API
    const logEndpoint = '/api/logs';
    fetch(logEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    }).catch((error) => {
      console.error('Failed to send log', error);
    });
  }

  static log(level, message, error) {
    if (!this.shouldLog(level)) {
      return;
    }
    const timestamp = new Date().toISOString();
    const stack = error ? error.stack : '';
    const formattedMessage = `[${timestamp}] [${level}] ${message} ${stack}`;

    switch (level) {
      case 'DEBUG':
        console.debug(formattedMessage);
        break;
      case 'INFO':
        console.info(formattedMessage);
        break;
      case 'WARN':
        console.warn(formattedMessage);
        break;
      case 'ERROR':
      case 'FATAL':
        console.error(formattedMessage);
        break;
      default:
        console.log(formattedMessage);
    }

    if (process.env.NODE_ENV === 'production') {
      this.sendLog(formattedMessage);
    }
  }

  // ...其他方法
}

// 生产环境中设置日志等级
if (process.env.NODE_ENV === 'production') {
  Logger.setLevel('WARN');
}

// 使用示例
Logger.debug('This will not be logged in production');
Logger.warn('This will be logged in production');
```

### 7. 日志等级控制

在开发环境中，我们可能希望看到尽可能多的日志输出，以便更好地调试应用。但在生产环境中，为了避免性能损耗和过多的日志信息，我们可能只希望输出 `WARN` 和以上等级的日志。我们可以在 `Logger` 中添加一个等级控制。

### 8. 日志格式化

为了进一步提高日志的可读性，我们可以添加格式化功能，比如为不同等级的日志添加颜色，或者为错误堆栈提供更好的格式化。

```javascript
class Logger {
  // ...其他方法

  static formatStack(stack) {
    if (!stack) return '';
    // 格式化错误堆栈的逻辑
    return stack.split('\n').map(line => `    at ${line}`).join('\n');
  }

  static log(level, message, error) {
    if (!this.shouldLog(level)) {
      return;
    }
    const timestamp = new Date().toISOString();
    let formattedMessage = `[${timestamp}] [${level}] ${message}`;

    if (error) {
      formattedMessage += `\n${this.formatStack(error.stack)}`;
    }

    switch (level) {
      case 'DEBUG':
        console.debug(formattedMessage);
        break;
      case 'INFO':
        console.info(formattedMessage);
        break;
      case 'WARN':
        console.warn(formattedMessage);
        break;
      case 'ERROR':
      case 'FATAL':
        console.error(formattedMessage);
        break;
      default:
        console.log(formattedMessage);
    }

    if (process.env.NODE_ENV === 'production') {
      this.sendLog(formattedMessage);
    }
  }

  // ...其他方法
}
```

通过以上步骤，我们可以建立一个前端项目的日志输出规范。一个好的日志系统应该是灵活的，能够根据不同的环境和需求进行适当的调整。日志是帮助我们更好地理解和维护应用的工具，合理的使用和管理日志对于任何规模的前端项目都是非常重要的。
