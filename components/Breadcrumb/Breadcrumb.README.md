<!-- STORY -->

# Breadcrumb

### Usage:

##### Default
```javascript
<Breadcrumb>
  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
  <Breadcrumb.Item>Reports</Breadcrumb.Item>
  <Breadcrumb.Item>
    <a href="/dashboard/reports/50467">50467</a>
  </Breadcrumb.Item>
</Breadcrumb>
```

##### Truncated

```javascript
<Breadcrumb truncateTo={2}> // 2 from end will be shown
  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
  <Breadcrumb.Item>Reports</Breadcrumb.Item>
  <Breadcrumb.Item>50467</Breadcrumb.Item>
  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
  <Breadcrumb.Item>Reports</Breadcrumb.Item>
  <Breadcrumb.Item>50467</Breadcrumb.Item>
</Breadcrumb>
```
